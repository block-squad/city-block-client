<template>
  <div class="home">
    <mainNav></mainNav>
    <feed></feed>
    <bottom></bottom>
  </div>
</template>

  <script>
    import MainNav from './MainNav'
    import Bottom from './Bottom'
    import Feed from './Feed'

    export default {
      components: {
        MainNav,
        Feed,
        Bottom
      }
    }
  </script>
