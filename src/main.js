import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App)
	.use(router)
	.mount('#app');

// Global properties
app.$appName = 'Vue3';
