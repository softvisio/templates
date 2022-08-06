export default {
    "apiEnabled": true,
    "rpcEnabled": false,
    "publicHttpServerEnabled": null,
    "privateHttpServerEnabled": null,

    "permissions": {
        "admin": Object.freeze( {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        } ),
    },

    "objects": {
        "project": {
            "basePermissions": [

                //
                "/v1/object-users/*",
                "/v1/project/*",
            ],
            "roles": {
                "admin": {
                    "name": "Administrator",
                    "description": "Project administrator. Full access.",
                    "permissions": [

                        //
                        "/v1/object-users/*",
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
