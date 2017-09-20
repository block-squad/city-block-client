<template>
  <div class="home">
      <hero></hero>
      <feed :projects="projects" :contribute="contribute"></feed>
  </div>
</template>

<script>
import Feed from './Feed'

const url = "https://city-block-server.herokuapp.com"

export default {
  components: {
    Feed
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
