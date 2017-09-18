<template>
  <div class="home">
    <mainNav></mainNav>
    <signin></signin>
    <feed :projects="projects"></feed>
    <bottom></bottom>
  </div>
</template>

  <script>
    import MainNav from './MainNav'
    import Bottom from './Bottom'
    import Feed from './Feed'
    import Signin from './Signin'
    const url = "https://city-block-server.herokuapp.com"

    export default {
      components: {
        MainNav,
        Feed,
        Signin,
        Bottom
      },
      data() {
        return {
          projects: [],

        }
      },
      async mounted() {
        const data = await fetch(`${url}/projects`)
        const response = await data.json()
        this.projects = response
      }
    }
  </script>
