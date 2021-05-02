import sql from "@softvisio/core/sql";

// import * as CONST from "#lib/const";

export default class {
    #dbh;

    constructor ( settings ) {
        if ( global.host ) global.host.on( "api/settings/update", this.#onSettingsUpdate.bind( this ) );

        this.#init( settings );
    }

    get dbh () {
        return this.#dbh;
    }

    async #init ( settings ) {
        this.#dbh = await sql.connect( process.env.APP_DB );

        this.#onSettingsUpdate( settings );
    }

    #onSettingsUpdate ( settings ) {}

    async RPC_test () {
        return result( 200 );
    }
}
