import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import NoPage from '../views/NoPage.vue';
import Settings from '../views/Settings.vue';
import Projects from '../views/Projects.vue';
import Projects1 from '../views/Projects1.vue';
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
		path: '/home/settings',
		name: 'settings',
		component: Settings,
	},

	{
		path: '/home/projects',
		name: 'projects',
		component: Projects,
	},
	{
		path: '/home/projects1',
		name: 'projects1',
		component: Projects1,
	},
	{
		path: '/:NotFound(.*)',
		name: 'NoPage',
		component: NoPage,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
