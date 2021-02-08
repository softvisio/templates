const mixins = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const Profile = require( "@softvisio/core/app/mixins/profile" );

/** class: Profile
 * summary: User profile.
 * extends:
 *   - "@softvisio/core/app/mixins/profile#Profile"
 */
module.exports = class extends mixins( Profile, Base ) {};
