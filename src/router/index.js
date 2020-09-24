import { createRouter, createWebHistory } from 'vue-router';
import blog from '../views/blog.vue';

const routes = [
	{
		path: '/',
		name: 'blog',
		component: blog,
	},
	{
		path: '/post/:id/:post',
		name: 'post',
		component: () => import(/* webpackChunkName: "post" */ '../views/post.vue'),
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
