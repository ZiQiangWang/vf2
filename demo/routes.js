import Vue from 'vue';
import Router from 'vue-router';
import Home from './home';
import Component from './pages/component';
import Line from './pages/line';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/c',
      component: Component,
      children: [
        ...Line,
      ],
    },
  ],
});
