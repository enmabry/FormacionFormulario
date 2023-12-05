import Vue from 'vue';
import Home from './App.vue';
import VueRouter from 'vue-router';
import router from './router/router'


Vue.use(VueRouter);
new Vue({
  render: h => h(Home),
  router: router
}).$mount('#app');

Vue.config.productionTip = false
