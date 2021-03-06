import Vue from 'vue';
import Router from 'vue-router';
import Signup from './views/Signup.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
