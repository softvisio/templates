<template>
    <ext-panel layout="fit" scrollable="true">
        <AppTitle ref="title" @showAccountDialog="showAccountDialog">
            <!-- <template #menuBottom> -->
            <!--     <ext-button  iconCls="fas fa-users" text="Users" textAlign="left" @tap="showUsersDialog"/> -->
            <!-- </template> -->
        </AppTitle>
    </ext-panel>
</template>

<script>
import AppTitle from "#vue/components/application/title";
import AccountDialog from "./private/account/dialog";

// import constants from "@/constants";

export default {
    "components": { AppTitle },

    "methods": {
        async showAccountDialog () {
            const cmp = await this.$mount( AccountDialog );

            cmp.ext.show();
        },
    },
};
</script>
