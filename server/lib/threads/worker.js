const sql = require( "@softvisio/core/sql" );

module.exports = class {
    #dbh;

    constructor ( appSettings ) {
        this.#dbh = sql.connect( process.env.APP_DB );

        if ( global.host ) global.host.on( "app/settings-updated", this.#onAppSettingsUpdated.bind( this ) );

        this.#init( appSettings );
    }

    get dbh () {
        return this.#dbh;
    }

    async #init ( appSettings ) {
        this.#onAppSettingsUpdated( appSettings );
    }

    #onAppSettingsUpdated ( data ) {}

    async RPC_test () {
        return result( 200 );
    }
};
