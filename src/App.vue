<template>
  <div id="app">
    <mainNav></mainNav>
    <router-view></router-view>
    <bottom :web3Provider="web3Provider" :web3="web3"></bottom>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import Bottom from './components/Bottom'
import Web3 from 'web3'

export default {
  name: 'app',
  data(){
    return {
      web3Provider: '',
      web3: ''
    }
  },
  methods: {
    method1: function() {
      if (typeof this.web3 !== 'undefined') {
        this.web3Provider = web3.currentProvider;
        this.web3 = new Web3(web3.currentProvider)
      } else {
        console.log('Injected web3 Not Found!!!')
        this.web3Provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.web3 = new Web3(this.web3Provider)
      }
      console.log(this.web3);
      console.log(this.web3Provider);
    },
    method2: function() {


      // var transObject = {
      //   from: 0xc7dA527348Dd9AF6e582189f408d4ECD56B29Dea,
      //   to: 0x19Ee0efbD0c8f9B6a06c929e2CaF4De76E8Eb565,
      //   value: web3.utils.toWei(.00001, 'ether'),
      //   gas: 21000,
      //   gasPrice: 'default',
      //   data: web3.utils.toHex('default'),
      //   nonce: 'default'
      // }
      //
      // return transObject;
      //
      // web3.eth.sendTransaction(transObject, function(error, result) {
      //
      //     if(error){
      //         setData('send_transaction_error_or_result', error, true);
      //     } else {
      //         setData('send_transaction_error_or_result', result, false);
      //         console.log(result)
      //         // set the link to ether scan
      //         var etherscanLinkA=document.getElementById('etherscan_io_tx_link');
      //         etherscanLinkA.href = createEtherscanIoUrl('tx',result);
      //         etherscanLinkA.innerHTML='etherscan.io'
      //     }
      // });
    }
  },
  beforeMount(){
    this.method1();
  },
  components: {
    MainNav,
    Bottom
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

mounted: function() {
  this.method1()
  this.method2()
},
