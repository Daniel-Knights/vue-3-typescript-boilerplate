<template>
	<div id="footer">&copy;Daniel Knights | {{ new Date().getFullYear() }}</div>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style lang="scss">
#footer {
	@include flex-x(center, center);
	height: 100px;
}
</style>
