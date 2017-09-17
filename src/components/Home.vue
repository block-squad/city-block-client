<template>
  <div class="home">
    <mainNav></mainNav>
    <bottom></bottom>
  </div>
</template>

  <script>
    import MainNav from './MainNav'
    import Bottom from './Bottom'

    export default {
      components: {
        MainNav,
        Bottom
      }
    }
  </script>
