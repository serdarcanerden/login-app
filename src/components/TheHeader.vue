<template>
	<v-card>
		<!-- APP BAR (HEADER) -->
		<v-app-bar collapse-on-scroll tile dense app>
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

			<v-btn class="ml-1 " small plain icon @click="toggleTheme">
				<v-icon :color="$vuetify.theme.dark ? 'white' : 'black'"
					>mdi-invert-colors</v-icon
				>
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn :disabled="backDisabled" plain icon @click="RouteBack"
				><v-icon>mdi-arrow-left-bold-circle-outline</v-icon></v-btn
			>
			<span class="font-weight-light grey--text"> {{ routerLinks }}</span>

			<v-btn class="mr-16" plain icon @click="RouteFront"
				><v-icon> mdi-arrow-right-bold-circle-outline</v-icon></v-btn
			>
			<v-spacer></v-spacer>
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
				<v-btn
					small
					plain
					color="warning"
					class="font-weight-light ma-1"
					@click="Logout()"
				>
					<v-icon>mdi-logout-variant</v-icon>
					<span>{{ $t('logout') }}</span>
				</v-btn>
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
	export default {
		name: 'TheHeader',
		data: function() {
			return {
				drawer: false,
				group: null,

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
			RouteBack() {
				this.$router.go(-1);
			},
			RouteFront() {
				this.$router.go(1);
			},
			Logout() {
				this.$store.commit('userLogout');
				this.$router.push({ path: '/' });
			},
		},

		computed: {
			backDisabled() {
				if (this.$route.name == 'Home') {
					return true;
				}
				return false;
			},
			Routepath() {
				return this.$route.path;
			},
			routerLinks() {
				const str = this.$route.path;
				let url = '';

				const routeArray = [];
				for (let i = 1; i <= str.length; i++) {
					if (str[i] != '' || str[i] != '/') {
						url += str[i];
					}
					if (str[i] === '/' || i === str.length - 1) {
						let adj = '';
						adj = url.replace('/', '');
						routeArray.push(adj);
						url = '';
					}
				}
				return routeArray;
			},
		},

		watch: {},
	};
</script>

<style scoped></style>
