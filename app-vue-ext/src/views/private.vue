<template>
    <ext-panel fullscreen="true" layout="fit" scrollable="true">
        <ext-titlebar docked="top" titleAlign="left" shadow="true" :title="title" margin="0 0 1 0" padding="0 0 0 10">
            <ext-image :src="avatar" align="right" width="32" height="32"/>
            <ext-button align="right" iconCls="fas fa-bars" margin="0 0 0 5" @tap="showMenu"/>

            <MenuSheet ref="menu">
                <ext-button iconCls="fas fa-cog" text="Settings" textAlign="left" :hidden="!isAdmin" @tap="showSettings"/>
                <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsers"/>
            </MenuSheet>
        </ext-titlebar>
    </ext-panel>
</template>

<script>
import CONST from "@/const";
import MenuSheet from "#softvisio/components/menu-sheet";
import SettingsDialog from "#softvisio/components/settings/dialog";
import UsersDialog from "#softvisio/components/users/dialog";

export default {
    "components": { MenuSheet },

    data () {
        return {
            "title": process.env.VUE_APP_TITLE,
        };
    },

    "computed": {
        avatar () {
            return this.$store.getters["session/avatar"];
        },

        isAdmin () {
            return this.$store.getters["session/hasPermissions"]( CONST.PERMS_ADMIN );
        },
    },

    "methods": {
        showMenu () {
            this.$refs.menu.show();
        },

        async showSettings () {
            this.$refs.menu.hide();

            if ( !this.settingsDialog ) this.settingsDialog = await Ext.Viewport.addVue( SettingsDialog );

            this.settingsDialog.$ext.show();
        },

        async showUsers () {
            this.$refs.menu.hide();

            if ( !this.usersDialog ) this.usersDialog = await Ext.Viewport.addVue( UsersDialog );

            this.usersDialog.$ext.show();
        },
    },
};
</script>
