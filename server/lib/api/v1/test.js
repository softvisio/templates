/** class: Test
 * summary: Test.
 * permissions:
 *   - '*'
 */
module.exports = class {
    #app;
    #api;
    #dbh;

    constructor ( app, api, options = {} ) {
        this.#app = app;
        this.#api = api;
        this.#dbh = options.dbh;
    }

    /** method: API_test
     * summary: Test method.
     */
    async API_test ( auth ) {
        return [200, new Date()];
    }
};
