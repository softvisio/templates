<template>
    <ext-panel fullscreen="true" layout="center">
        <AuthPanel reset signup shadow/>
    </ext-panel>
</template>

<script>
import AuthPanel from "#softvisio/components/auth/panel";

export default {
    "components": { AuthPanel },
};
</script>
