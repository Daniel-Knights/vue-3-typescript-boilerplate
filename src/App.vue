<template>
	<Background />
	<Toggle />
	<router-view />
	<Footer />
</template>

<script>
import Background from '@/components/Background.vue';
import Toggle from '@/components/Toggle.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'App',

	components: { Background, Toggle, Footer },
};
</script>
