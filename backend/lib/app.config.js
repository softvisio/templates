export default {
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
        "project": {
            "roles": {
                "admin": {
                    "name": "Administrator",
                    "description": "Project administrator. Full access.",
                    "permissions": [

                        //
                        "/v1/acl/*",
                        "/v1/project/*",
                    ],
                },
                "manager": {
                    "name": "Manager",
                    "description": "Project manager. Limited access.",
                    "permissions": [

                        //
                        "/v1/project/*",
                    ],
                },
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
