<template>
    <div id="footer">
        <small>&copy;Daniel Knights | {{ new Date().getFullYear() }}</small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>

<style lang="scss">
#footer {
    @include flex-x(center, center);
    height: 100px;
}
</style>
