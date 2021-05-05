import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import NoPage from '../views/NoPage.vue';

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
	},
	{
		path: '/:NotFound(.*)',
		name: NoPage,
		component: NoPage,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
