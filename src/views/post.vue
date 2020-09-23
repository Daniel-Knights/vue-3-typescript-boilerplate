<template>
	<div id="single-post-container">{{ selectedPost }}</div>
</template>

<script>
import { computed, toRefs } from 'vue';
import postsStore from '@/store/posts';
import router from '@/router';

export default {
	name: 'post',

	props: { id: { type: String, required: true } },

	setup(props) {
		const { id } = toRefs(props);
		const { loading, selectedPost, fetchSelectedPost } = postsStore();

		fetchSelectedPost({ id });

		return { loading, selectedPost: computed(() => selectedPost.value) };
	},
};
</script>

<style lang="scss"></style>
