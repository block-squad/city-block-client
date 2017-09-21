<template>
  <div class="home">
    <brand v-if="!isSignedIn"></brand>
    <hero v-if="isSignedIn"></hero>
    <feed :projects="projects" :isSignedIn="isSignedIn"></feed>
  </div>
</template>

<script>
import Feed from './Feed'
import Brand from './Brand'
import Hero from './Hero'

const url = "https://city-block-server.herokuapp.com"

export default {
  components: {
    Feed,
    Brand,
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
  },
  methods: {
    contribute() {

    }
  }
}
</script>
