module.exports = class {
    constructor () {
        global.host.on( "app/settings-updated", settings => {} );
    }

    async RPC_test () {
        return 200;
    }
};
