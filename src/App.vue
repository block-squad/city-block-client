<template>
  <div id="app">
    <mainNav :isSignedIn="isSignedIn"></mainNav>
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
  computed: {
    isSignedIn() {
      let token = localStorage.getItem('token')
      if (token) {
        return true
      } else {
        return false
      }
    }
  },
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
