<template>
	<Background />
	<Navbar />
	<Toggle />
	<router-view />
	<Footer />
</template>

<script>
import Background from '@/components/Background.vue';
import Navbar from '@/components/Navbar.vue';
import Toggle from '@/components/Toggle.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'App',

	components: { Background, Navbar, Toggle, Footer },
};
</script>
