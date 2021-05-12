<template>
	<v-card>
		<v-app-bar dense collapse-on-scroll min-width="250" app>
			<!-- Menu item as nav draver -->
			<v-app-bar-nav-icon
				class="mr-2"
				small
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<!-- User image atm. random image-->
			<v-avatar size="35">
				<v-img src="https://randomuser.me/api/portraits/women/64.jpg"></v-img
			></v-avatar>

			<!-- User name -->
			<v-app-bar-title class="ml-1">
				Sandra Adams
			</v-app-bar-title>

			<v-spacer></v-spacer>
			<v-btn class="ml-1" small plain fab><v-icon>mdi-magnify</v-icon></v-btn>
			<v-btn class="ml-1" small plain fab @click="toggleTheme">
				<v-icon :color="$vuetify.theme.dark ? 'white' : 'black'"
					>mdi-invert-colors</v-icon
				>
			</v-btn>
			<v-btn
				small
				class="ml-1"
				plain
				fab
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
				{ name: 'dark', icon: 'mdi-magnify' },
				{ name: 'footString', icon: 'mdi-lock' },
			],
		}),
		methods: {
			toggleTheme() {
				this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			},
		},

		computed: {
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

<style scoped>
	/* .header {
		background-image: linear-gradient(
			80deg,
			hsla(237, 8%, 49%, 0.986),
			hsla(212, 9%, 66%, 0.705)
		);
	} */
</style>
