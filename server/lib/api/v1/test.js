const Base = require( "@softvisio/core/app/mixins/base" );
const result = require( "@softvisio/core/result" );

/** class: Test
 * summary: Test.
 * permissions:
 *   - '*'
 */
module.exports = class extends Base() {

    /** method: API_test
     * summary: Test method.
     */
    async API_test ( auth ) {
        return result( 200, new Date() );
    }
};
