<template>
	<v-dialog v-model="dialog" max-width="400">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				small
				text
				slot="activator"
				color="warning"
				class="font-weight-light ma-1"
				v-bind="attrs"
				v-on="on"
			>
				<v-icon>mdi-logout-variant</v-icon>
				<span>{{ $t('logout') }}</span>
			</v-btn>
		</template>
		<v-card>
			<v-card-title class="font-weight-light">
				<span>{{ $t('soutreminder') }}</span>
			</v-card-title>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="warning" @click="Logout()">
					<span>{{ $t('confirm') }}</span>
				</v-btn>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		data: function() {
			return {
				dialog: false,
			};
		},
		methods: {
			Logout() {
				this.$store.commit('userLogout');
				this.$router.push({ path: '/' });
				this.dialog = false;
			},
		},
	};
</script>

<style></style>
