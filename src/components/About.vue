<template>
  <div class="about">
    <MainNav></MainNav>
    <div class="columns container">
      <div class="column">
        <h1>About City Block</h1>
          <p>A crazy idea by a couple kids in a class who thougth they could</p>
      </div>
      <div class="column">
        <h2>How to Use City Block</h2>
        <p>Make sure you have Meta mask or your wallet address make contributions etc </p>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>

import MainNav from './MainNav'
import Bottom from './Bottom'

export default {
  name: 'about',
  components: {
    MainNav,
    Bottom
  }
}

</script>
