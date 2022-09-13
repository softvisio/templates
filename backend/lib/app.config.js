export default {
    "locales": ["en-GB"], // "en-US","uk","ru"
    "defaultLocale": "en-GB",
    "currency": "USD",

    "apiEnabled": true,
    "rpcEnabled": false,
    "publicHttpServerEnabled": null,
    "privateHttpServerEnabled": null,

    "roles": {
        "admin": Object.freeze( {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        } ),
    },

    "acl": {
        "types": {
            "project": {
                "roles": {
                    "admin": {
                        "name": "Administrator",
                        "description": "Bot administrator. Full access.",
                        "permissions": {
                            "/*": true,
                            "/v1/acl/*": true,
                        },
                    },
                    "manager": {
                        "name": "Manager",
                        "description": "Bot manager. Limited access.",
                        "permissions": {
                            "/*": true,
                            "/v1/acl/*": false,
                        },
                    },
                },
            },
        },
        "objectTypes": {
            "project": {
                "isAclObject": true,
                "resolver": null,
            },
            "task": {
                "resolver": `SELECT project_id AS id FROM task WHERE id = ?`,
            },
        },
    },

    "notifications": {
        "security": {
            "name": "Security",
            "description": "Various security related notifications",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
        "other": {
            "name": "Other",
            "description": "Other unclassified notifications",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
    },
};
