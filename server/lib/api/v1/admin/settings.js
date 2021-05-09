import mixins from "#core/mixins";
import Base from "#core/app/mixins/base";
import Settings from "#core/app/mixins/admin/settings";

/** class: Settings
 * summary: App settings.
 * extends:
 *   - "@softvisio/core/app/mixins/admin/settings#Settings"
 */
export default class extends mixins( Settings, Base ) {}
