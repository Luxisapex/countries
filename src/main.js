import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Country from './Country.vue'
import Top10 from './Top10.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/country/:name', name: 'country', component: Country },
  { path: '/top10', component: Top10 }
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
