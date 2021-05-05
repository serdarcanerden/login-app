import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Vue.component('my-component', {
	methods: {},
});
export default new Vuetify({
	theme: { dark: false },
});
