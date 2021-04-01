<template>
    <ext-panel layout="fit" scrollable="true">
        <ext-titlebar docked="top" titleAlign="left" :title="title" margin="0 0 1 0" padding="0 0 0 10">
            <Avatar align="right"/>
            <ext-button align="right" iconCls="fas fa-bars" margin="0 0 0 5" ui="action" @tap="showMenu"/>

            <MenuSheet ref="menu" @showProfileDialog="showProfileDialog">
                <template #top>
                    <ext-button iconCls="fas fa-cog" text="Settings" textAlign="left" :hidden="!isAdmin" @tap="showSettingsDialog"/>
                    <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsersDialog"/>
                </template>
                <template #bottom-up/>
                <template #bottom-down/>
            </MenuSheet>
        </ext-titlebar>
    </ext-panel>
</template>

<script>
import Avatar from "#softvisio/components/menu/avatar";
import MenuSheet from "#softvisio/components/menu/sheet";
import SettingsDialog from "./private/settings/dialog";
import UsersDialog from "#softvisio/components/users/dialog";
import ProfileDialog from "./private/profile/dialog";

// import CONST from "@/const";

export default {
    "components": { Avatar, MenuSheet },

    "computed": {
        title () {
            return this.$store.session.title;
        },

        isAdmin () {
            return this.$store.session.hasPermissions( "admin" );
        },
    },

    "methods": {
        showMenu () {
            this.$refs.menu.show();
        },

        async showSettingsDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( SettingsDialog );

            cmp.ext.show();
        },

        async showUsersDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( UsersDialog );

            cmp.ext.show();
        },

        async showProfileDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( ProfileDialog );

            cmp.ext.show();
        },
    },
};
</script>
