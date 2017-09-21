<template>
  <div class="column is-half-mobile is-one-quarter-desktop">
    <div class="project">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img v-bind:src="image(project.type)">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
            </div>
            <div class="media-content">
              <p class="title is-4">{{project.name}}</p>
              <p class="subtitle is-6">contract address</p>
            </div>
          </div>
          <div class="content">
            {{project.desc}}
            <br>
            <div class="columns">
              <div class="column">
                {{daysLeft}}
              </div>
              <div class="column">
                ${{project.money}}
              </div>
              <div class="column">
                ${{project.target}}
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" v-on:click="contribute" class="card-footer-item">Contribute</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'project',
  props: ['project', 'contribute'],
  computed: {
    daysLeft() {
      let deadline = new Date(`
        ${new Date(this.project.date).getMonth() + 3} /
        ${new Date(this.project.date).getDate()} /
        ${new Date(this.project.date).getFullYear()}
        `)
      return `${deadline.getMonth()}/${deadline.getDate()}/${deadline.getFullYear()}`
    }
  },
  methods: {
    image(type) {
      if (type == 'street/roads') {
        return '../assets/street.jpg'
      } else {
        return 'http://bulma.io/images/placeholders/1280x960.png'
      }
    }
  }
}
</script>

<style scoped>
  .card-content {
    height: 30vh;
    overflow: scroll;
  }
</style>
