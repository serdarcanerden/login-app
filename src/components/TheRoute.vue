/* NOT USED */

<template>
	<div>
		<v-list-item class="mx-auto">
			<v-btn :disabled="backDisabled" plain fab x-small @click="RouteBack"
				><v-icon>mdi-arrow-left-bold-circle-outline</v-icon></v-btn
			>

			<v-list-item-subtitle class="text-center">{{
				$route.path
			}}</v-list-item-subtitle>
			<v-spacer></v-spacer>
			<v-btn plain fab x-small @click="RouteFront"
				><v-icon> mdi-arrow-right-bold-circle-outline</v-icon></v-btn
			>
		</v-list-item>
	</div>
</template>

<script>
	export default {
		data: () => ({}),

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

			// Added this part while trying to figure out if browsers forward button or clicked or not
			// or if we can figure out where we are at the history stack we can disable the forward button
			// accordingly
			// frontDisabled() {
			// 	console.log(window.location.lasthash.pop());
			// 	return false;
			// },
		},
	};
</script>

<style></style>
