<template>
	<div id="main">
		<Widgets/>
		<Launcher />
		
	</div>
</template>

<script>
	export default {
        mounted() {
            this.$store.dispatch('loadWidgets');
        }
    }
</script>

<style lang="scss">
	#main {
		width:100vw;
		height:100vh;
		padding: 0 0 0 75px;
	}
</style>