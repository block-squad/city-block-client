<template>
  <div class="home container">
    <section class="section">
      <feed :projects="projects"></feed>
    </section>
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
  }
}
</script>
