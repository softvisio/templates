<template>
    <ext-panel layout="fit" scrollable="true">
        <Title ref="title" @showProfileDialog="showProfileDialog">
            <template #menuTop>
                <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsersDialog"/>
            </template>
        </Title>
    </ext-panel>
</template>

<script>
import Title from "#vue/components/title/titlebar";
import UsersDialog from "#vue/components/users/dialog";
import ProfileDialog from "./private/profile/dialog";

// import CONST from "@/const";

export default {
    "components": { Title },

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
