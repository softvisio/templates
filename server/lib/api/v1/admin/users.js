import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import Users from "#core/app/mixins/admin/users";

/** class: Users
 * summary: App users.
 * extends:
 *   - "@softvisio/core/app/mixins/admin/users#Users"
 */
export default class extends mixins( Users, Base ) {}
