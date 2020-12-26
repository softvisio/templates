const App = require( "@softvisio/core/app" );
const getApiClass = require( "@softvisio/core/app/api" );
const sql = require( "@softvisio/core/sql" );

const CONST = require( "./const" );

module.exports = class extends App {
    #dbh;
    #api;

    static cli () {
        return {
            "options": {},
            "arguments": {},
        };
    }

    get dbh () {
        return this.#dbh;
    }

    async run () {

        // signal handlers
        process.on( "SIGINT", () => {
            console.log( "SIGINT" );

            process.exit();
        } );

        process.on( "SIGTERM", () => {
            console.log( "SIGTERM" );

            process.exit();
        } );

        // create dbh
        this.#dbh = sql.connect( process.env.APP_DB );

        // create api endpoint
        this.#api = new ( getApiClass( this.#dbh ) )( this, this.#dbh );

        // init api
        var res = await this.#api.init( {
            "permissions": CONST.PERMISSIONS,
            "schema": __dirname + "/db",
            "methods": __dirname + "/api",
        } );
        if ( !res.ok ) return res;

        // run threads
        process.stdout.write( "Starting threads ... " );
        res = await this.threads.run( {
            "worker": {
                "num": 1,
                "filename": __dirname + "/threads/worker",
                "constructor": [this.#api.appSettings],
            },
        } );
        console.log( res + "" );
        if ( !res.ok ) return res;

        // create HTTP server locations
        this.server.webpack( "/", __dirname + "/../app/www" ).api( "/api", this.#api );

        // run HTTP server
        res = this._listen();
        if ( !res.ok ) return res;

        return result( 200 );
    }
};
