const App = require( "@softvisio/core/app" );
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
        this.#api = await this._buildApi( this.#dbh, {
            "permissions": CONST.PERMISSIONS,
            "objects": CONST.OBJECTS,
            "schema": __dirname + "/db",
            "methods": __dirname + "/api",
        } );
        if ( !this.#api ) return result( 500 );

        // run threads
        process.stdout.write( "Starting threads ... " );
        var res = await this.threads.run( {
            "worker": {
                "num": 1,
                "path": __dirname + "/threads/worker",
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
