import Vue from 'vue';
import Router from 'vue-router';
import Home from './home';
import Component from './pages/component';
import pages from './pages';

let components = [];
pages.forEach((page) => {
  components = components.concat(page.routes);
});

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
      children: components,
    },
  ],
});
