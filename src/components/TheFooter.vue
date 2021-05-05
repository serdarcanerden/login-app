<template>
	<v-footer cols="2" align="center" class="footer" absolute>
		<v-row justify="center" no-gutters>
			<!-- Displayng a  -->
			<v-col class="text-center white--text">
				{{ new Date().getFullYear() }}
				{{ footer }}
			</v-col>
		</v-row>
		<v-col>
			<v-btn small fab plain @click="langSelect('tr')">
				<country-flag country="tr" />
			</v-btn>
			<v-btn small fab plain @click="langSelect('en')">
				<country-flag country="gb" />
			</v-btn>
			<v-btn small fab plain @click="langSelect('de')">
				<country-flag country="de" />
			</v-btn>
			<v-btn small fab plain @click="langSelect('ru')">
				<country-flag country="ru" />
			</v-btn>
		</v-col>
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
	.footer {
		background-image: linear-gradient(
			45deg,
			hsla(230, 54%, 38%, 0.397),
			hsla(196, 58%, 48%, 0.603)
		);
	}

	select option {
		margin: 40px;
		color: rgb(118, 118, 126);
	}
</style>
