import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/Blog.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/post/:id/:post',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
    },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
