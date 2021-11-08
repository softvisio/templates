const CONST = {
    "permissions": {
        "admin": Object.freeze( {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        } ),
    },

    "objects": {
        "task": {
            "id": 0,
            "roles": {
                "admin": { "name": "Administrator", "description": "Task administrator. Full access.", "canEditRoles": true },
                "user": { "name": "User", "description": "Task user. Read only." },
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

export default CONST;
