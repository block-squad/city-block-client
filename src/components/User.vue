<template>
  <section class="section">
    <div class="user container">
      <div class="columns is-desktop">
        <div class="column is-one-quarter-desktop">
        </div>
        <div class="column is-three-quarters-desktop">
          <feed :projects="projects"></feed>
        </div>
      </div>
    </div>
  </section>
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
