import Base from "#core/app/mixins/base";

/** class: Test
 * summary: Test.
 * permissions: ["*"]
 */
export default class extends Base() {

    /** method: API_test
     * summary: Test method.
     */
    async API_test ( auth ) {
        return result( 200, new Date() );
    }
}
