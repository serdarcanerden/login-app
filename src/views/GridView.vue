<template>
	<v-container>
		<the-header></the-header>
		<v-row>
			<v-col sm="6"
				><div><grid></grid></div
			></v-col>
			<v-col sm="6"
				><div><grid></grid></div
			></v-col>
		</v-row>
	</v-container>
</template>

<script>
	import TheHeader from '../components/HeaderParts/TheHeader.vue';
	import Grid from '../components/Dragable/Grid';

	export default {
		components: {
			TheHeader,
			Grid,
		},
	};
</script>

<style></style>
