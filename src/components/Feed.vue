<template>
  <div class="feed section">
    <div class="container">
      <div class="columns is-desktop is-multiline">
        <project v-for="project in projects" :project="project" key=""></project>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './Project'

export default {
  name: 'feed',
  components: {
    Project
  },
  props: ['projects']
}

</script>
