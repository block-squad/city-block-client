<template>
  <div class="home">
    <mainNav></mainNav>
    <signin></signin>
    <feed></feed>
    <bottom></bottom>
  </div>
</template>

  <script>
    import MainNav from './MainNav'
    import Bottom from './Bottom'
    import Feed from './Feed'
    import Signin from './Signin'

    export default {
      components: {
        MainNav,
        Feed,
        Signin,
        Bottom
      }
    }
  </script>
