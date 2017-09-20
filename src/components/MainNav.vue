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
            <router-link to='/signup' class="navbar-item">Sign Up</router-link>
            <router-link to='/signin' class="navbar-item">Sign In</router-link>
            <router-link to='/newproject' class="navbar-item">New Project</router-link>
            <div class="navbar-item">
              <a class="button is-primary">Logout</a>
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
  data() {
    return {
      isMobile: false
    }
  },
  methods: {
    toggleBurger(event) {
      this.isMobile = !this.isMobile
    }
  }
}
</script>
