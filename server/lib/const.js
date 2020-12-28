const { constants } = require( "@softvisio/core/util" );

const CONST = {
    "PERMISSIONS": {
        "admin": {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        },
    },
};

module.exports = constants( CONST );
