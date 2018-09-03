import Vue from 'vue';
import '@antv/f2/lib';
import App from './app';

import router from './routes';
import VF from '../src';
import common from './pages/common';

Vue.use(VF);
Vue.use(common);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
});
