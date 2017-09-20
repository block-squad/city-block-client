<template>
  <div class="about">
    <brand></brand>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1>About City Block</h1>
            <p>A crazy idea by a couple kids in a class who thougth they could</p>
          </div>
          <div class="column">
            <h2>How to Use City Block</h2>
            <p>Make sure you have Meta mask or your wallet address make contributions etc </p>
          </div>
        </div>
      </div>
    </section>
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
