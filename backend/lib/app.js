import App from "#core/app";

export default class extends App {

    // propeties
    get location () {
        return import.meta.url;
    }

    // protected
    async _init () {
        var res;

        res = await super._init();
        if ( !res.ok ) return res;

        return result( 200 );
    }

    async _runThreads () {
        return super._runThreads();

        // return this.threads.run( {
        //     "worker": {
        //         "num": 1,
        //         "module": new URL( "threads/worker.js", import.meta.url ),
        //         "arguments": null,
        //     },
        // } );
    }

    async _run () {
        return super._run();
    }

    async _getHealthCheckStatus () {
        return super.getHealthCheckStatus();
    }
}
