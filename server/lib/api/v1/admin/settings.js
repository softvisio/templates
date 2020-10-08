const { mix } = require( "@softvisio/core/mixins" );
const Base = require( "@softvisio/core/app/mixins/base" );
const Settings = require( "@softvisio/core/app/mixins/admin/settings" );

/** class: Settings
 * summary: App settings.
 * extends:
 *   - '@softvisio/core/app/mixins/admin/settings#Settings'
 */
module.exports = class extends mix( Settings, Base ) {};
