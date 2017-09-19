<template>
  <div class="home">
    <section class="">
      <sidebar></sidebar>
      <feed :projects="projects"></feed>
    </section>
  </div>
</template>

<script>
import Feed from './Feed'
import Sidebar from './Sidebar'

const url = "https://city-block-server.herokuapp.com"

export default {
  components: {
    Feed,
    Sidebar
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
