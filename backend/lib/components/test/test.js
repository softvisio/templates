export default class Test {
    #app;
    #config;

    constructor ( app, config ) {
        this.#app = app;
        this.#config = config;
    }

    // properties
    get app () {
        return this.#app;
    }

    get config () {
        return this.#config;
    }

    // public
    async init () {

        // init db
        const res = await this.app.dbh.schema.migrate( new URL( "db", import.meta.url ) );
        if ( !res.ok ) return res;

        return result( 200 );
    }

    async start () {
        const res = await this.app.threads.start( {
            "name": "test",
            "numberOfThreads": 1,
            "module": new URL( "threads/worker.js", import.meta.url ),
            "args": null,
        } );
        if ( !res.ok ) return res;

        return result( 200 );
    }

    async destroy () {
        return result( 200 );
    }
}
