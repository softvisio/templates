const { mix } = require( "@softvisio/core/mixins" );
const Settings = require( "@softvisio/core/app/mixins/admin/settings" );

/** class: Settings
 * summary: App settings.
 * extends:
 *   - '@softvisio/core/app/mixins/admin/settings#Settings'
 */
module.exports = class extends mix( Settings ) {
    #app;
    #api;
    #dbh;

    constructor ( app, api, options = {} ) {
        super( app, api, options );

        this.#app = app;
        this.#api = api;
        this.#dbh = options.dbh;
    }
};
