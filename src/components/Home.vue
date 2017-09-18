<template>
  <div class="home">
    <signin></signin>
    <feed :projects="projects"></feed>
  </div>
</template>

<script>
import Feed from './Feed'
import SignIn from './SignIn'
const url = "https://city-block-server.herokuapp.com"

export default {
  components: {
    Feed,
    SignIn
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
