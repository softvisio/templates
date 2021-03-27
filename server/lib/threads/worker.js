const sql = require( "@softvisio/core/sql" );

// const CONST = require( "../const" );

module.exports = class {
    #dbh;

    constructor ( settings ) {
        this.#dbh = sql.connect( process.env.APP_DB );

        if ( global.host ) global.host.on( "app/settings/update", this.#onSettingsUpdate.bind( this ) );

        this.#init( settings );
    }

    get dbh () {
        return this.#dbh;
    }

    async #init ( settings ) {
        this.#onSettingsUpdate( settings );
    }

    #onSettingsUpdate ( settings ) {}

    async RPC_test () {
        return result( 200 );
    }
};
