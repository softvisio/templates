<template>
    <ext-panel layout="fit" scrollable="true">
        <AppTitle ref="title" @showProfileDialog="showProfileDialog">
            <template #menuTop>
                <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsersDialog"/>
            </template>
        </AppTitle>
    </ext-panel>
</template>

<script>
import AppTitle from "#vue/components/app-title";
import UsersDialog from "#vue/components/users/dialog";
import ProfileDialog from "./private/profile/dialog";

// import constants from "@/constants";

export default {
    "components": { AppTitle },

    "computed": {
        isAdmin () {
            return this.$store.session.hasPermissions( "admin" );
        },
    },

    "methods": {
        async showUsersDialog () {
            this.$refs.title.hideMenu();

            const cmp = await this.$mount( UsersDialog );

            cmp.ext.show();
        },

        async showProfileDialog () {
            const cmp = await this.$mount( ProfileDialog );

            cmp.ext.show();
        },
    },
};
</script>
