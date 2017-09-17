<template>
  <div class="container">
  <div class="mainNav">
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
        <a class="navbar-item"> About</a>
        <a class="navbar-item"> Sign Up</a>
        <a class="navbar-item"> Sign In</a>
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
