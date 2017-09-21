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

const url = 'https://fast-reef-25356.herokuapp.com'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // mounted: function() {
  //   // this.method1()
  //   this.method2()
  // },
  // methods: {
  //   // method1: function() {
  // //     if (typeof web3 !== 'undefined') {
  // //   web3 = new Web3(web3.currentProvider)
  // //   let account = web3.eth.getAccounts()
  // //   console.log(account)
  // //   // let balance = web3.eth.getBalance(web3.eth.accounts[0])
  // //   // console.log(balance)
  // // } else {
  // //   console.log('Injected web3 Not Found!!!')
  // //   web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  // //   }
  // // },
  // method2: function() {
  //   var transObject = {
  //     from: 0xc7dA527348Dd9AF6e582189f408d4ECD56B29Dea,
  //     to: 0x19Ee0efbD0c8f9B6a06c929e2CaF4De76E8Eb565,
  //     value: web3.utils.toWei(.00001, 'ether'),
  //     gas: 21000,
  //     gasPrice: 'default',
  //     data: web3.utils.toHex('default'),
  //     nonce: 'default'
  //   }
  //
  //   return transObject;
  //
  //   web3.eth.sendTransaction(transObject, function(error, result) {
  //
  //       if(error){
  //           setData('send_transaction_error_or_result', error, true);
  //       } else {
  //           setData('send_transaction_error_or_result', result, false);
  //           console.log(result)
  //           // set the link to ether scan
  //           var etherscanLinkA=document.getElementById('etherscan_io_tx_link');
  //           etherscanLinkA.href = createEtherscanIoUrl('tx',result);
  //           etherscanLinkA.innerHTML='etherscan.io'
  //       }
  //   });
// }
// }
})
