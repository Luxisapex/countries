import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Country from './Country.vue'
import List from './List.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/country/:countryName', name: 'country', component: Country },
  { path: '/list/:list/:limit', name: 'list', component: List }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  data: {
    url: 'https://restcountries.eu/rest/v2'
  },
  render: h => h(App)
})
