<template>
    <div id="blog">
        <h1>VUE3 BLOG</h1>
        <Posts />
    </div>
</template>

<script>
import Posts from '@/components/Posts.vue';

export default {
    name: 'blog',

    components: { Posts },
};
</script>

<style lang="scss">
#blog {
    animation: opacity-in 0.5s;
}
</style>
