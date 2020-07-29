const { mix } = require( "@softvisio/core/mixins" );
const Users = require( "@softvisio/core/app/mixins/admin/users" );

/** class: Users
 * summary: App users.
 * extends:
 *   - '@softvisio/core/app/mixins/admin/users#Users'
 */
module.exports = class extends mix( Users ) {
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
