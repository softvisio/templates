const { mix } = require( "@softvisio/core/mixins" );
const ApiTokens = require( "@softvisio/core/app/mixins/api-tokens" );

/** class: ApiTokens
 * summary: User api access tokens management.
 * extends:
 *   - '@softvisio/core/app/mixins/api-tokens#ApiTokens'
 */
module.exports = class extends mix( ApiTokens ) {
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
