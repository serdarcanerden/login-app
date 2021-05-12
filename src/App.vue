<template>
	<v-app>
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</v-container>
		</v-main>

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

		// This part was created for the navigation guard part for user check and disabling the home button
		// to not let the person leave the site with a button that we provide on the page
		// created() {
		// 	// eslint-disable-next-line no-unused-vars
		// 	this.$router.beforeEach((to, from, next) => {
		// 		console.log('From : ' + typeof from.name + ' ' + from.name);
		// 		console.log('To :' + typeof to.name + ' ' + to.name);
		// 		if (
		// 			to.name === 'Home' ||
		// 			to.name === 'settings' ||
		// 			to.name === 'projects' ||
		// 			to.name === 'projects1'
		// 		) {
		// 			console.log('TRUE');
		// 			next();
		// 		} else {
		// 			console.log('FALSE');
		// 			next(false);
		// 		}
		// 	});
		// },
	};
</script>

<style>
	.myFont {
		font-family: 'Mansalva';
	}
</style>
