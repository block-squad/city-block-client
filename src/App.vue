<template>
  <div id="app">
    <mainNav :isSignedIn="isSignedIn"></mainNav>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import Bottom from './components/Bottom'
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
  components: {
    MainNav,
    Bottom
  }
}
</script>
