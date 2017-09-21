<template>
  <div class="about">
    <div class="hero-body">
    </div>
  </div>
</template>

<script>
import Brand from './Brand'

export default {
  name: 'about',
  components: {
    Brand
  }
}
</script>

<style scoped>
  .hero-body {
    background: url('../assets/cb-about.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 85vh;
  }
</style>
