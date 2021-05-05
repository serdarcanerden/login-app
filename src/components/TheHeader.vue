<template>
	<v-app-bar class="header" dense fixed collapse-on-scroll min-width="230">
		<v-avatar>
			<v-icon dark>
				mdi-account-circle
			</v-icon>
		</v-avatar>
		<v-btn plain fab>
			<v-icon dark> mdi-format-list-bulleted-square </v-icon>1</v-btn
		>
		<v-btn plain fab>
			<v-icon dark> mdi-format-list-bulleted-square </v-icon>2</v-btn
		>
		<v-btn plain fab>
			<v-icon dark>
				mdi-format-list-bulleted-square
			</v-icon>
			3</v-btn
		>
		<v-spacer></v-spacer>
		<v-btn fab small @click="toggleTheme" plain> {{ ButtonText }}</v-btn>
	</v-app-bar>
</template>
<script>
	export default {
		name: 'TheHeader',
		data: () => ({ drawer: false, group: null }),
		methods: {
			toggleTheme() {
				this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			},
		},

		computed: {
			ButtonText() {
				return !this.$vuetify.theme.dark ? this.$t('dark') : this.$t('light');
			},
		},
	};
</script>

<style scoped>
	.header {
		background-image: linear-gradient(
			45deg,
			hsla(196, 58%, 48%, 0.603),
			hsla(230, 54%, 38%, 0.397)
		);
	}
</style>
