<template>
	<div>
		<!-- BACK BUTTON DISABLED ATM -->
		<!-- <v-btn :disabled="backDisabled" plain icon @click="RouteBack"
				><v-icon>mdi-arrow-left-bold-circle-outline</v-icon></v-btn
			> -->
		<!-- THE LINKS FOR CONDITIONAL PATHS -->
		<!-- Conditional place part I do think it should be improved but no other way came to my mind but conditionally
					rendering this is so bad checking every place and constructing the path accordingly and giving the user to ability
					to redirect from this point makes the menu useless -->
		<v-divider vertical></v-divider>
		<div>
			<div :class="$route.meta.headerClass">
				<span v-if="this.$route.path === '/home/projects'">
					<router-link class="font-weight-light grey--text" to="/home/projects"
						>/projects</router-link
					>
				</span>
				<span v-if="this.$route.path === '/home/projects1'">
					<router-link class="font-weight-light grey--text" to="/home/projects1"
						>/projects1</router-link
					>
				</span>
				<span v-if="this.$route.path === '/home/settings'">
					<router-link class="font-weight-light grey--text" to="/home/settings"
						>/settings</router-link
					>
				</span>
			</div>
		</div>

		<!-- FORWARD BUTTON DISABLED ATM -->
		<!-- <v-btn class="mr-16" plain icon @click="RouteFront"
				><v-icon> mdi-arrow-right-bold-circle-outline</v-icon></v-btn
			> -->
		<!-- <v-spacer></v-spacer> -->
	</div>
</template>

<script>
	export default {
		data: function() {
			return {};
		},
		methods: {
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
		},
	};
</script>

<style></style>
