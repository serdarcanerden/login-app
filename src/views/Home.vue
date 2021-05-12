<template>
	<div>
		<the-header></the-header>
		<the-route></the-route>
		<v-skeleton-loader
			v-bind="attrs"
			type="card-avatar, article, actions"
		></v-skeleton-loader>
		<v-skeleton-loader
			v-bind="attrs"
			type="article, actions"
		></v-skeleton-loader>
		<v-skeleton-loader
			v-bind="attrs"
			type="table-heading, list-item-two-line, image, table-tfoot"
		></v-skeleton-loader>
		<v-skeleton-loader
			v-bind="attrs"
			type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
		></v-skeleton-loader>
	</div>
</template>

<script>
	import TheHeader from '../components/TheHeader';
	import TheRoute from '../components/TheRoute';
	export default {
		components: { TheHeader, TheRoute },
		data: () => ({
			attrs: {
				class: 'mb-6',
				boilerplate: true,
				elevation: 5,
			},
		}),
	};
</script>

<style></style>
