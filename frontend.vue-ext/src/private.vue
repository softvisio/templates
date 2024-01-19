<template>
    <ext-panel layout="fit" scrollable="true">
        <AppTitle ref="title">
            <!-- <template #menuBottom> -->
            <!--     <ext-button  iconCls="fas fa-users" text="Users" textAlign="left" @tap="showUsersDialog"/> -->
            <!-- </template> -->
        </AppTitle>
    </ext-panel>
</template>

<script>
import AppTitle from "#vue/components/application/title";

export default {
    "components": { AppTitle },

    "methods": {},
};
</script>
