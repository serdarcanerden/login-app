import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import NoPage from '../views/NoPage.vue';
import Settings from '../views/Settings.vue';
import Projects from '../views/Projects.vue';
import Projects1 from '../views/Projects1.vue';
import NoLogin from '../views/NoLogin.vue';
import store from '../store/index';
Vue.use(VueRouter);

const routes = [
	{
		path: '/Login',
		alias: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: { requiresAuth: true },
	},
	{
		path: '/home/settings',
		name: 'settings',
		component: Settings,
		meta: { requiresAuth: true },
	},

	{
		path: '/home/projects',
		name: 'projects',
		component: Projects,
		meta: { requiresAuth: true },
	},
	{
		path: '/home/projects1',
		name: 'projects1',
		component: Projects1,
		meta: { requiresAuth: true },
	},
	{
		path: '*',
		name: 'NoPage',
		component: NoPage,
	},
	{
		path: '/Nologin',
		name: 'Nologin',
		component: NoLogin,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		if (!store.getters.isUserLogged) {
			router.replace('/Nologin');
		} else next();
	} else {
		next();
	}
});
export default router;
