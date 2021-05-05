<template>
	<div>
		<the-header></the-header>
		<v-container>
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
		</v-container>
	</div>
</template>

<script>
	import TheHeader from '../components/TheHeader';

	export default {
		components: { TheHeader },
		data: () => ({
			attrs: {
				class: 'mb-6',
				boilerplate: true,
				elevation: 2,
			},
		}),
	};
</script>

<style></style>
