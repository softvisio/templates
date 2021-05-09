import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import ApiTokens from "#core/app/mixins/api-tokens";

/** class: ApiTokens
 * summary: User api access tokens management.
 * extends:
 *   - "@softvisio/core/app/mixins/api-tokens#ApiTokens"
 */
export default class extends mixins( ApiTokens, Base ) {}
