<template>
  <div class="home container">
    <section class="section">
      <hero></hero>
      <feed :projects="projects"></feed>
    </section>
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
