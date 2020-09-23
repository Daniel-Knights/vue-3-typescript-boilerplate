<template>
	<div class="blog">
		<h1>BLOG</h1>
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
.blog {
	min-height: 100vh;
	animation: opacity-in 0.5s;
}
</style>
