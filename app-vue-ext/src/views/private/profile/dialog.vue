<template>
    <ProfileDialog>
        <template #top>
            <!-- <ext-panel title="General Settings"> -->
            <!--     <ext-toolbar docked="top" :hidden="titles"> -->
            <!--         <ext&#45;container html="General Settings"/> -->
            <!--     </ext-toolbar> -->
            <!--     <ext-fieldset defaults='{"labelAlign":"left","labelWidth":250}'> -->
            <!--         <ext-textfield label="Test field" bind="{record.test}"/> -->
            <!--     </ext-fieldset> -->
            <!-- </ext-panel> -->
        </template>

        <template #bottom/>
    </ProfileDialog>
</template>

<script>
import ProfileDialog from "#vue/components/profile/dialog";

export default {
    "components": { ProfileDialog },
};
</script>
