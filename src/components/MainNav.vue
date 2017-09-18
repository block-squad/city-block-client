<template>
  <div class="mainNav">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item" >
            <img src="../assets/CB-logo.png" alt="cityBlock" >
          </router-link>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-end">
          <router-link to='/about' class="navbar-item">About</router-link>
          <router-link to='/signup' class="navbar-item">Sign Up</router-link>
          <a class="navbar-item">Sign In</a>
          <!-- <div class="navbar-item">
            <a class="button is-primary">Logout</a>
          </div> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainNav'
}
</script>

<style scoped>
  .navbar-brand.navbar-item a img {
    height: 200px;
  }

</style>
