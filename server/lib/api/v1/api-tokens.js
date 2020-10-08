const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const ApiTokens = require( "@softvisio/core/app/mixins/api-tokens" );

/** class: ApiTokens
 * summary: User api access tokens management.
 * extends:
 *   - '@softvisio/core/app/mixins/api-tokens#ApiTokens'
 */
module.exports = class extends mix( ApiTokens, Base ) {};
