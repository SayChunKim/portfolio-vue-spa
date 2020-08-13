/* eslint-disable max-len */
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMeta from 'vue-meta';
import Carousel3d from 'vue-carousel-3d';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import i18n from './i18n';

Vue.use(Carousel3d);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueMeta);

new Vue({
  i18n,
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
