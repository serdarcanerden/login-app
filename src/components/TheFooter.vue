<template>
	<v-footer
		align="center"
		class="footer"
		absolute
		src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
		app
	>
		<v-row no-gutters>
			<!-- Displayng a  -->
			<small>
				<v-col class="text-center">
					{{ new Date().getFullYear() }}
					{{ footer }}
				</v-col>
			</small>
			<v-col class="text-right">
				<v-btn x-small fab plain @click="langSelect('tr')">
					<country-flag country="tr" />
				</v-btn>
				<v-btn x-small fab plain @click="langSelect('en')">
					<country-flag country="gb" />
				</v-btn>
				<v-btn x-small fab plain @click="langSelect('de')">
					<country-flag country="de" />
				</v-btn>
				<v-btn x-small fab plain @click="langSelect('ru')">
					<country-flag country="ru" />
				</v-btn>
			</v-col>
		</v-row>
	</v-footer>
</template>
<script>
	import CountryFlag from 'vue-country-flag';

	export default {
		components: {
			CountryFlag,
		},
		name: 'TheFooter',
		data: () => ({
			items: ['en', 'tr'],
		}),
		methods: {
			langSelect(value) {
				this.$i18n.locale = value;
			},
		},
		computed: {
			footer() {
				let footer = '';
				footer = this.$t('footString');
				return footer;
			},
		},
	};
</script>

<style scoped>
	/* .footer {
		background-image: linear-gradient(
			80deg,
			hsla(212, 9%, 66%, 0.705),
			hsla(237, 8%, 49%, 0.986)
		);
	} */

	select option {
		margin: 40px;
		color: rgb(118, 118, 126);
	}
</style>
