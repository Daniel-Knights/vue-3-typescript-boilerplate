import { ref, computed } from 'vue';
import Axios from 'axios';

const loading = ref(false);
const posts = ref([]);
const selectedPost = ref({});

export default function postsStore() {
	async function fetchPosts() {
		loading.value = true;
		await Axios.get('http://jsonplaceholder.typicode.com/posts')
			.then(res => {
				posts.value = res.data;
				loading.value = false;
			})
			.catch(err => {
				console.log(err);
				loading.value = false;
			});
	}

	async function fetchSelectedPost(params) {
		loading.value = true;
		await Axios.get(`http://jsonplaceholder.typicode.com/posts/${params.id.value}`)
			.then(res => {
				selectedPost.value = res.data;
				loading.value = false;
			})
			.catch(err => {
				console.log(err);
				loading.value = false;
			});
	}

	return {
		loading: computed(() => loading.value),
		posts: computed(() => posts.value),
		selectedPost: computed(() => selectedPost.value),

		fetchPosts,
		fetchSelectedPost,
	};
}
