<template>
	<div>
		<v-list-item class="mx-auto">
			<v-btn :disabled="isDisabled" plain fab x-small @click="RouteBack"
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
			isDisabled() {
				if (window.history.length <= 2 || this.$route.name == 'Home') {
					return true;
				}
				return false;
			},
		},
	};
</script>

<style></style>
