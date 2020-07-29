const { mix } = require( "@softvisio/core/mixins" );
const Session = require( "@softvisio/core/app/mixins/session" );

/** class: Sesion
 * summary: Sesion.
 * extends:
 *   - '@softvisio/core/app/mixins/session#Session'
 */
module.exports = class extends mix( Session ) {
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
