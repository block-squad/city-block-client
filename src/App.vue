<template>
  <div id="app">
    <mainNav></mainNav>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  // computed: {
  //   isSignedIn() {
  //     return true // refactor later based on if token exists
  //   }
  // },
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
