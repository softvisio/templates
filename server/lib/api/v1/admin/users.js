const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const Users = require( "@softvisio/core/app/mixins/admin/users" );

/** class: Users
 * summary: App users.
 * extends:
 *   - "@softvisio/core/app/mixins/admin/users#Users"
 */
module.exports = class extends mix( Users, Base ) {};
