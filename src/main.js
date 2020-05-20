import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Carousel3d from 'vue-carousel-3d';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.use(Carousel3d);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
