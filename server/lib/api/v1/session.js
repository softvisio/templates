const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const Session = require( "@softvisio/core/app/mixins/session" );

/** class: Sesion
 * summary: Sesion.
 * extends:
 *   - "@softvisio/core/app/mixins/session#Session"
 */
module.exports = class extends mix( Session, Base ) {};
