import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Vue.component('my-component', {
	methods: {},
});

const vuetify = new Vuetify({
	theme: {
		themes: {},
		dark: false,
	},
});

export default vuetify;
