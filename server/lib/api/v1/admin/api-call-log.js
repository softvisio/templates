const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const ApiCallLog = require( "@softvisio/core/app/mixins/admin/api-call-log" );

/** class: ApiCallLog
 * summary: App API call log.
 * extends:
 *   - "@softvisio/core/app/mixins/admin/api-call-log#ApiCallLog"
 */
module.exports = class extends mix( ApiCallLog, Base ) {};
