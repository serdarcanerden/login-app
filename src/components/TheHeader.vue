<template>
	<v-card>
		<!-- APP BAR (HEADER) -->
		<v-app-bar tile dense collapse-on-scroll min-width="170" app>
			<!-- Menu item as nav draver -->
			<v-app-bar-nav-icon
				class="mr-1"
				small
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-divider vertical></v-divider>
			<v-btn
				small
				class="ml-1"
				plain
				icon
				@click="$router.push({ name: 'Home' }).catch((err) => {})"
			>
				<v-icon class="ml-1">mdi-home</v-icon></v-btn
			>
			<header-path class="mb-5"></header-path>
			<v-spacer></v-spacer>
			<v-btn class="mr-1 " small plain icon @click="toggleTheme">
				<v-icon :color="$vuetify.theme.dark ? 'white' : 'black'"
					>mdi-invert-colors</v-icon
				>
			</v-btn>
		</v-app-bar>
		<!-- Navigation Drawer -->
		<v-navigation-drawer left temporary v-model="drawer" collapse- app>
			<v-layout column align-center>
				<v-flex class="mt-5">
					<v-avatar class="ma-1" size="60">
						<v-img src="https://randomuser.me/api/portraits/lego/6.jpg"></v-img
					></v-avatar>
				</v-flex>
				<span class="font-weight-light ma-2">{{
					this.$store.getters.userName
				}}</span>
				<!-- SIGNOUT BUTTON AND POPUP -->
				<sign-out></sign-out>
			</v-layout>

			<v-list>
				<v-list-item
					v-for="item in menuitems"
					:key="item.title"
					link
					@click="$router.push({ name: item.name }).catch((err) => {})"
				>
					<v-list-item-action>
						<v-icon class="ml-12" small color="primary">{{ item.icon }}</v-icon>
					</v-list-item-action>
					<span class="primary--text ml-n5"> {{ $t(item.name) }}</span>
				</v-list-item>
				<v-list-group> </v-list-group>
			</v-list>
		</v-navigation-drawer>
	</v-card>
</template>
<script>
	import SignOut from './HeaderParts/SignOut';
	import HeaderPath from './HeaderParts/HeaderPath';
	export default {
		components: { SignOut, HeaderPath },
		name: 'TheHeader',
		data: function() {
			return {
				drawer: false,
				// Dynamic menu element items
				menuitems: [
					{ name: 'projects', icon: 'mdi-file' },
					{ name: 'projects1', icon: 'mdi-file' },
					{ name: 'settings', icon: 'mdi-cog' },
				],
			};
		},
		methods: {
			toggleTheme() {
				this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			},
			// RouteBack() {
			// 	this.$router.go(-1);
			// },
			// RouteFront() {
			// 	this.$router.go(1);
			// },
		},

		computed: {
			// backDisabled() {
			// 	if (this.$route.name == 'Home') {
			// 		return true;
			// 	}
			// 	return false;
			// },
		},

		watch: {
			// NOT USED ATM MAYBE LATER ON FOR CONSTRUCTING PATHS FROM HERE DYNAMICALLY CAN BE POSSIBLE INSTEAD OF CONDITIONALLY ADDING
			// routePath() {
			// 	console.log(this.routePath);
			// 	let url = '';
			// 	for (let i = 1; i <= this.routePath.length; i++) {
			// 		if (this.routePath[i] != '' || this.routePath[i] != '/') {
			// 			url += this.routePath[i];
			// 		}
			// 		if (this.routePath[i] === '/' || i === this.routePath.length - 1) {
			// 			let adj = '';
			// 			adj = url.replace('/', '');
			// 			this.routeArray.push(adj);
			// 			url = '';
			// 		}
			// 	}
			// 	},
		},
	};
</script>

<style scoped></style>
