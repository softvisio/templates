const sql = require( "@softvisio/core/sql" );
const result = require( "@softvisio/core/result" );

module.exports = class {
    #dbh;

    constructor ( appSettings ) {
        this.#dbh = sql.connect( process.env.APP_DB );

        global.host.on( "app/settings-updated", this._onAppSettingsUpdated.bind( this ) );

        this._init( appSettings );
    }

    get dbh () {
        return this.#dbh;
    }

    async _init ( appSettings ) {
        this._onAppSettingsUpdated( appSettings );
    }

    _onAppSettingsUpdated ( data ) {}

    async RPC_test () {
        return result( 200 );
    }
};
