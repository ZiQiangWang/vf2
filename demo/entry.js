import Vue from 'vue';
import App from './app';

import router from './routes';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
});
