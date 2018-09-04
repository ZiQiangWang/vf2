import Vue from 'vue';
import F2 from '@antv/f2/lib/index-all';
import App from './app';

import router from './routes';
import VF2 from '../src';

import common from './pages/common';

Vue.prototype.F2 = F2;
Vue.use(VF2);
Vue.use(common);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
});
