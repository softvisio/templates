import mixins from "@softvisio/core/mixins";
import Base from "@softvisio/core/app/mixins/base";
import ApiTokens from "@softvisio/core/app/mixins/api-tokens";

/** class: ApiTokens
 * summary: User api access tokens management.
 * extends:
 *   - "@softvisio/core/app/mixins/api-tokens#ApiTokens"
 */
export default class extends mixins( ApiTokens, Base ) {}
