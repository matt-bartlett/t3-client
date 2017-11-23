// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise/auto')
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: { App }
})
