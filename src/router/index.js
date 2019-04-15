import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/index'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '*',
      name: 404,
      component: resolve => require(['@/components/NotFound'], resolve)
    }
  ]
});
