<template>
	<div class="post">
		<h5>{{ post.title.toUpperCase() }}</h5>
		<p>{{ post.body }}</p>
		<router-link
			:to="{
				name: 'post',
				params: { id: post.id, post: postUrl },
			}"
			>Read More</router-link
		>
	</div>
</template>

<script>
import { toRefs } from 'vue';

export default {
	name: 'Post',

	props: { post: { type: Object, required: true } },

	setup(props) {
		const { post } = toRefs(props);
		const postUrl = post.value.title.split(' ').join('-');

		return { post, postUrl };
	},
};
</script>

<style lang="scss"></style>
