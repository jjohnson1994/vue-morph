import Vue from 'vue';
import App from './App.vue';
import VueMorph from '../vue-morph';

Vue.config.productionTip = false;

Vue.use(VueMorph);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
