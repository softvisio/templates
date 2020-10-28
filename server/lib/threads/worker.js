const sql = require( "@softvisio/core/sql" );

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
        return 200;
    }
};
