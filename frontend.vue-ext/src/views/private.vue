<template>
    <ext-panel layout="fit" scrollable="true">
        <AppTitle ref="title" @showAccountDialog="showAccountDialog">
            <template #menuBottom>
                <ext-button :hidden="!isAdministrator" iconCls="fas fa-users" text="Users" textAlign="left" @tap="showUsersDialog"/>
            </template>
        </AppTitle>
    </ext-panel>
</template>

<script>
import AppTitle from "#vue/components/app-title";
import UsersDialog from "#vue/components/users/dialog";
import AccountDialog from "./private/account/dialog";

// import constants from "@/constants";

export default {
    "components": { AppTitle },

    data () {
        return {
            "isAdministrator": this.$app.hasPermissions( "admin:read" ),
        };
    },

    "methods": {
        async showUsersDialog () {
            this.$refs.title.hideMenu();

            const cmp = await this.$mount( UsersDialog );

            cmp.ext.show();
        },

        async showAccountDialog () {
            const cmp = await this.$mount( AccountDialog );

            cmp.ext.show();
        },
    },
};
</script>
