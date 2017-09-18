<template>
  <div class="feed container">
    <div class="columns">
      <project v-for="project in projects" :project="project"></project>
      <div class="column">

      </div>
      <div class="column">

      </div>
      <div class="column">

      </div>
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
