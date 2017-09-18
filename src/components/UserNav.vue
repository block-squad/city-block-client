<template>
  <div class="container">
  <div class="userNav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <a class="navbar-item" >
        <img src="../assets/CB-logo.png" alt="cityBlock" >
      </a>
      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
      <div class="navbar-end">
        <router-link to='/create' class="navbar-item"> Create Project</router-link>
        <router-link to='/' class="navbar-item"> Log Out</router-link>
      </div>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'userNav'
}
</script>

<style scoped>
  .navbar-brand.navbar-item a img {
    height: 200px;
  }

</style>
