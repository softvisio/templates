<template>
    <SettingsDialog>
        <template #top>
            <!-- <ext&#45;fieldset title="General Settings" defaults='{"labelAlign":"left","labelWidth":250}'> -->
            <!--     <ext&#45;textfield label="Test Field" bind="{record.test_field}"/> -->
            <!-- </ext&#45;fieldset> -->
        </template>
    </SettingsDialog>
</template>

<script>
import SettingsDialog from "#softvisio/components/settings/dialog";

export default {
    "components": { SettingsDialog },
};
</script>
