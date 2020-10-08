const Base = require( "@softvisio/core/app/mixins/base" );

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
        return [200, new Date()];
    }
};
