import Base from "#app/threads/base";

// import sql from "#core/sql";
// import CONST from "#lib/const";

export default class extends Base {
    constructor ( ...args ) {
        super( ...args );
    }

    async _init () {
        await super._init();
    }

    async API_test () {
        return result( 200 );
    }
}
