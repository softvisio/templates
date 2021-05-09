import Thread from "#core/app/thread";

// import sql from "#core/sql";
// import CONST from "#lib/const";

export default class extends Thread {
    constructor ( settings ) {
        super( settings );
    }

    async _init ( settings ) {
        await super._init( settings );

        this._onSettingsUpdate( settings );
    }

    _onSettingsUpdate ( settings ) {}

    async RPC_test () {
        return result( 200 );
    }
}
