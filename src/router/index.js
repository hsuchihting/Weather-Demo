import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import About from '../views/About.vue';
import About2 from '../views/About2.vue';
import About3 from '../views/About3.vue';


Vue.use(VueRouter);

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/about2',
		name: 'About2',
		component: About2,
	},
	{
		path: '/about3',
		name: 'About3',
		component: About3,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
