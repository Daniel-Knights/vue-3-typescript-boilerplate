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
		children: [
			{
				path: 'comments',
				name: 'comments',
				component: () => import(/* webpackChunkName: "comments" */ '../views/comments.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
