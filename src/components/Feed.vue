<template>
  <div class="feed">
    <div class="container">
      <div class="columns is-desktop is-multiline">
        <project :contribute="contribute" v-for="project in projects" :project="project" key=""></project>
      </div>
  <div class="feed section">
    <div class="columns is-multiline is-mobile">
      <project v-for="project in projects" :project="project" key=""></project>
    </div>
  </div>
</template>

<script>
import Project from './Project'

export default {
  name: 'feed',
  props: ['contribute']
  components: {
    Project
  },
  props: ['projects']
}

</script>
