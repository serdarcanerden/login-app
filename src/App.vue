<template>
	<v-app>
		<v-container class="mx-auto mt-10 mb-10">
			<router-view />
		</v-container>
		<the-footer> </the-footer>
	</v-app>
</template>

<script>
	import TheFooter from './components/TheFooter';
	export default {
		components: {
			TheFooter,
		},
		name: 'App',
		data: () => ({}),
	};
</script>

<style>
	.myFont {
		font-family: 'Mansalva';
	}
</style>
