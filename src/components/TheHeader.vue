<template>
	<v-card>
		<v-app-bar dense collapse-on-scroll min-width="260" color="primary" app>
			<!-- Menu item as nav draver -->
			<v-app-bar-nav-icon
				class="mr-1"
				small
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<!-- User image atm. random image-->
			<v-avatar class="ma-1" size="35">
				<v-img src="https://randomuser.me/api/portraits/women/64.jpg"></v-img
			></v-avatar>

			<v-btn :disabled="backDisabled" plain icon x-small @click="RouteBack"
				><v-icon>mdi-arrow-left-bold-circle-outline</v-icon></v-btn
			>

			<v-list-item-subtitle class="text-center">
				{{ $route.path }}
			</v-list-item-subtitle>
			<v-spacer></v-spacer>
			<v-btn plain icon x-small @click="RouteFront"
				><v-icon> mdi-arrow-right-bold-circle-outline</v-icon></v-btn
			>

			<v-spacer></v-spacer>

			<v-btn class="ml-1" small plain icon @click="toggleTheme">
				<v-icon :color="$vuetify.theme.dark ? 'white' : 'black'"
					>mdi-invert-colors</v-icon
				>
			</v-btn>
			<v-btn
				small
				class="ml-1"
				plain
				icon
				@click="$router.push({ name: 'Home' }).catch((err) => {})"
			>
				<v-icon>mdi-home</v-icon></v-btn
			>
		</v-app-bar>
		<v-navigation-drawer bottom temporary v-model="drawer" app>
			<template v-for="item in menuitems">
				<v-list-item
					:key="item.title"
					link
					@click="$router.push({ name: item.name }).catch((err) => {})"
				>
					<v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
				</v-list-item>
			</template>
		</v-navigation-drawer>
	</v-card>
</template>
<script>
	export default {
		name: 'TheHeader',
		data: () => ({
			drawer: false,
			group: null,
			//Dynamic menu element items
			menuitems: [
				{ name: 'projects', icon: 'mdi-file' },
				{ name: 'projects1', icon: 'mdi-file' },
				{ name: 'settings', icon: 'mdi-cog' },
			],
		}),
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
		},

		computed: {
			backDisabled() {
				if (this.$route.name == 'Home') {
					return true;
				}
				return false;
			},
			Routepath() {
				console.log(this.$route.path);
				return this.$route.path;
			},
		},
		watch: {
			group() {
				console.log(this.drawer);
				this.drawer = false;
			},
		},
	};
</script>

<style scoped></style>
