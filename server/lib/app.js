import App from "#core/app";
import sql from "#core/sql";
import CONST from "#lib/const";

export default class extends App {
    #dbh;

    constructor () {
        super( CONST );
    }

    // static
    static cli () {
        return {
            "options": {},
            "arguments": {},
        };
    }

    // properties
    get dbh () {
        return this.#dbh;
    }

    // public
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

        // init services
        var res = await this.initServices();
        if ( !res.ok ) return res;

        // init cluster
        res = await this.initCluster( process.env.APP_CLUSTER_ID, this.services.get( "core" ) );
        if ( !res.ok ) return res;

        // create dbh
        this.#dbh = await sql.new( process.env.APP_DB );

        // create notifications
        res = await this.createNotifications();
        if ( !res.ok ) return res;

        // create API
        res = await this.createApi( this.Api, this.#dbh, {
            "dbSchema": new URL( "./db", import.meta.url ),
            "apiSchema": new URL( "./api", import.meta.url ),
        } );
        if ( !res.ok ) return res;

        // create RPC
        res = await this.createRpc( this.Rpc, {
            "apiSchema": new URL( "./rpc", import.meta.url ),
        } );
        if ( !res.ok ) return res;

        // run threads
        res = await this.runThreads( {
            "worker": {
                "num": 1,
                "path": new URL( "./threads/worker.js", import.meta.url ),
                "arguments": null,
            },
        } );
        if ( !res.ok ) return res;

        // init HTTP server
        this.server.webpack( "/", new URL( "../app/www", import.meta.url ) ).api( "/api", this.api );

        // start RPC server
        // res = await this.rpc.listen();
        // if ( !res.ok ) return res;

        // start HTTP+API server
        res = await this.server.listen();
        if ( !res.ok ) return res;

        // run notifications
        res = await this.notifications.run();
        if ( !res.ok ) return res;

        return result( 200 );
    }
}
