import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state() {
		return { userLogged: false, userName: '' };
	},
	mutations: {
		userCheck(state, name) {
			state.userLogged = true;
			state.userName = name;
		},

		userLogout(state) {
			state.userLogged = false;
			state.userName = '';
		},
	},
	getters: {
		isUserLogged(state) {
			return state.userLogged;
		},
		userName(state) {
			return state.userName;
		},
	},
});
