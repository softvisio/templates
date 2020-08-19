const { mix } = require( "@softvisio/core/mixins" );
const ApiKeys = require( "@softvisio/core/app/mixins/api-keys" );

/** class: ApiKeys
 * summary: User api keys management.
 * extends:
 *   - '@softvisio/core/app/mixins/api-keys#ApiKeys'
 */
module.exports = class extends mix( ApiKeys ) {
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
