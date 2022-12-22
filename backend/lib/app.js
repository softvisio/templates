import App from "#core/app";

export default class extends App {

    // propeties
    get location () {
        return import.meta.url;
    }

    // public
    async getHealthCheckStatus () {
        return super.getHealthCheckStatus();
    }

    // protected
    async _init () {
        var res;

        res = await super._init();
        if ( !res.ok ) return res;

        // res = await this.threads.run( {
        //     "worker": {
        //         "num": 1,
        //         "module": new URL( "./threads/worker.js", import.meta.url ),
        //         "arguments": null,
        //     },
        // } );
        // if ( !res.ok ) return res;

        return result( 200 );
    }

    async _run () {
        return super._run();
    }
}
