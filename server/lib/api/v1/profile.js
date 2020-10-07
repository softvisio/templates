const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/api/base" );
const Profile = require( "@softvisio/core/app/mixins/profile" );

/** class: Profile
 * summary: User profile.
 * extends:
 *   - '@softvisio/core/app/mixins/profile#Profile'
 */
module.exports = class extends mix( Profile, Base ) {};
