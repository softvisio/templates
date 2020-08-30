const App = require( "@softvisio/core/app" );
const getApiClass = require( "@softvisio/core/app/api" );
const sql = require( "@softvisio/core/sql" );
const result = require( "@softvisio/core/result" );

module.exports = class extends App {
    dbh;

    static cli () {
        return {
            "options": {},
            "arguments": {},
        };
    }

    constructor ( options = {} ) {
        super( options );
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
        const dbh = ( this.dbh = sql.connect( process.env.APP_DB ) );

        // create api endpoint
        this.api = new ( getApiClass( dbh ) )( this, dbh );

        // init api
        var res = await this.api.init();
        if ( !res.ok ) return res;

        // load api methods
        res = await this.api.loadMethods( __dirname + "/api", { dbh } );
        if ( !res.ok ) return res;

        // migrate dbh
        process.stdout.write( "Migrating DB schema ... " );
        await dbh.loadSchema( __dirname + "/db" );
        res = await dbh.migrate();
        console.log( res + "" );
        if ( !res.ok ) process.exit( 1 );

        // load app settings
        process.stdout.write( "Loading app settings ... " );
        res = await this.api.loadAppSettings();
        console.log( res + "" );
        if ( !res.ok ) process.exit( 1 );

        // run threads
        process.stdout.write( "Starting threads ... " );
        res = await this.threads.run( {
            "worker": {
                "num": 1,
                "filename": __dirname + "/threads/worker",
                "constructor": [this.api.getAppSettings()],
            },
        } );
        console.log( res + "" );
        if ( !res.ok ) process.exit( 1 );

        // create server locations
        this.server.webpack( "/", __dirname + "/../app/www" ).api( "/api", this.api );

        // run server
        this._listen();

        return result( 200 );
    }
};
