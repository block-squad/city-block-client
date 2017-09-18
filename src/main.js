// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import Web3 from 'web3'

Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: function() {
    this.method1()
  },
  methods: {
    method1: function() {
      if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
    console.log('we maybe did it');
  } else {
    console.log('Injected web3 Not Found!!!')
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
  }
  }
})
