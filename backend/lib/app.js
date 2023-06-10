import App from "#core/app";

export default class extends App {

    // propeties
    get location () {
        return import.meta.url;
    }

    // protected
    async _init () {
        return result( 200 );
    }

    async _run () {
        return result( 200 );
    }

    async _runThreads () {
        return this.threads.run( {

            // "worker": {
            //     "numberOfThreads": 1,
            //     "module": new URL( "threads/worker.js", import.meta.url ),
            //     "arguments": [
            //         {
            //             "dbh": this.dbh,
            //         },
            //     ],
            // },
        } );
    }
}
