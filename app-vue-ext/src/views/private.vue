<template>
    <ext-panel fullscreen="true" layout="fit" scrollable="true">
        <ext-titlebar docked="top" titleAlign="left" :title="title" margin="0 0 1 0" padding="0 0 0 10">
            <Avatar align="right"/>
            <ext-button align="right" iconCls="fas fa-bars" margin="0 0 0 5" @tap="showMenu"/>

            <MenuSheet ref="menu">
                <ext-button iconCls="fas fa-cog" text="Settings" textAlign="left" :hidden="!isAdmin" @tap="showSettings"/>
                <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsers"/>
            </MenuSheet>
        </ext-titlebar>
    </ext-panel>
</template>

<script>
import Avatar from "#softvisio/components/menu/avatar";
import MenuSheet from "#softvisio/components/menu/sheet";
import SettingsDialog from "./private/settings/dialog";
import UsersDialog from "#softvisio/components/users/dialog";

import CONST from "@/const";

export default {
    "components": { Avatar, MenuSheet },

    "computed": {
        title () {
            return this.$store.session.title;
        },

        isAdmin () {
            return this.$store.session.hasPermissions( CONST.PERMS_ADMIN );
        },
    },

    "methods": {
        showMenu () {
            this.$refs.menu.show();
        },

        async showSettings () {
            this.$refs.menu.hide();

            if ( !this.settingsDialog ) this.settingsDialog = await Ext.Viewport.addVue( SettingsDialog );

            this.settingsDialog.ext.show();
        },

        async showUsers () {
            this.$refs.menu.hide();

            if ( !this.usersDialog ) this.usersDialog = await Ext.Viewport.addVue( UsersDialog );

            this.usersDialog.ext.show();
        },
    },
};
</script>
