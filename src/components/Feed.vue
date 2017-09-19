<template>
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
  components: {
    Project
  },
  props: ['projects']
}

</script>
