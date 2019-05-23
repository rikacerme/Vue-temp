import Home from '@/views/Home.vue';
// import PeopleList from '@/views/PeopleList.vue';
// import PlanetList from '@/views/PlanetList.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobslist',
      name: 'jobslist',
      component: Home,
    },
    {
      path: '/jobdetail/:id',
      name: 'Details',
      // component: Details,
      component: () =>
        import(/* webpackChunkName: "planets" */ './views/Details.vue'),
    },
  ],
});
