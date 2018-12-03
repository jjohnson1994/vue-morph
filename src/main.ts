import Vue from 'vue';
import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';
import PageOne from './PageOne.vue';
import PageTwo from './PageTwo.vue';

import VueMorph from '../vue-morph';

Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'pageOne', component: PageOne },
  { path: '/page-two', name: 'pageTwo', component: PageTwo },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueMorph);
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
