<template>
  <div class="mainNav">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item" >
            <h1 class="title">City Block</h1>
            <!-- <img src="../assets/CB-logo.png" alt="cityBlock" > -->
          </router-link>
          <button class="button navbar-burger" v-on:click.prevent="toggleBurger" v-bind:class="{'is-active': isMobile}">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': isMobile}">
          <div class="navbar-end">
            <router-link to='/about' class="navbar-item">About</router-link>
            <router-link v-if="!isSignedIn"  to='/signup' class="navbar-item">Sign Up</router-link>
            <router-link v-if="!isSignedIn"  to='/signin' class="navbar-item">Sign In</router-link>
            <router-link v-if="isSignedIn" to='/newproject' class="navbar-item">New Project</router-link>
            <div v-if="isSignedIn" class="navbar-item">
              <a v-on:click="logout" class="button is-primary">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mainNav',
  props: ['isSignedIn'],
  data() {
    return {
      isMobile: false
    }
  },
  methods: {
    toggleBurger(event) {
      this.isMobile = !this.isMobile
    },
    logout(event) {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      location.href = '/'
      this.isSignedIn = false
    }
  }
}
</script>
