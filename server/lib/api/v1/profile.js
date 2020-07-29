const { mix } = require( "@softvisio/core/mixins" );
const Profile = require( "@softvisio/core/app/mixins/profile" );

/** class: Profile
 * summary: User profile.
 * extends:
 *   - '@softvisio/core/app/mixins/profile#Profile'
 */
module.exports = class extends mix( Profile ) {
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
