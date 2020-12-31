const { constants } = require( "@softvisio/core/util" );

const CONST = {
    "PERMISSIONS": {
        "admin": {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        },
    },
    "OBJECT_PERMISSIONS": {},
};

module.exports = constants( CONST );
