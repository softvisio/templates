import Thread from "#core/app/thread";

export default class extends Thread {

    // public
    async API_test () {
        return result( 200 );
    }

    // protected
    async _init ( options = {} ) {
        if ( options.dbh ) {
            await this._initDbh( options.dbh );
        }

        return super._init( options );
    }
}
