<template>
  <div class="home">
    <hero v-if="isSignedIn"></hero>
    <feed :projects="projects"></feed>
  </div>
</template>

<script>
import Feed from './Feed'
import Hero from './Hero'

const url = "https://city-block-server.herokuapp.com"

export default {
  components: {
    Feed,
    Hero
  },
  computed: {
    isSignedIn() {
      let token = localStorage.getItem('token')
      if (token) {
        return true
      } else {
        return false
      }
    }
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
