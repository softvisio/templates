import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import ApiCallLog from "#core/app/mixins/admin/api-call-log";

/** class: ApiCallLog
 * summary: App API call log.
 * extends:
 *   - "@softvisio/core/app/mixins/admin/api-call-log#ApiCallLog"
 */
export default class extends mixins( ApiCallLog, Base ) {}
