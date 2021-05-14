import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from '@/plugins/vuetify.js';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	i18n,
	render: (h) => h(App),
}).$mount('#app');
i18n.locale = 'tr';
