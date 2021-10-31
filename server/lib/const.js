const CONST = {
    "permissions": {
        "admin": Object.freeze( {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        } ),
    },

    "objects": {},

    "notifications": {
        "categories": {
            "other": { "internal": true, "email": true, "telegram": true, "push": true },
        },
    },
};

export default CONST;
