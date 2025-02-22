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

    async _start () {
        return result( 200 );
    }

    async _startThreads () {
        return this.threads.start( {

            // "worker": {
            //     "numberOfThreads": 1,
            //     "module": new URL( "threads/worker.js", import.meta.url ),
            //     "args": [
            //         {
            //             "dbh": this.dbh,
            //         },
            //     ],
            // },
        } );
    }
}
