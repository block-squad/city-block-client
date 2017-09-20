<template>
  <div class="column is-half-mobile is-one-third-desktop">
    <div class="project">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <!-- <img src="../assets/street.jpg" alt=""> -->
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
        <footer v-if="isSignedIn" class="card-footer">
          <a href="#" class="card-footer-item">Contribute</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import street from '../assets/street.jpg'
import river from '../assets/river.jpg'
import park from '../assets/park.jpg'
import culture from '../assets/culture.jpg'
import building from '../assets/building.jpg'
import education from '../assets/education.jpg'

export default {
  name: 'project',
  props: ['project', 'isSignedIn'],
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
        return street
      } else if (type == 'parks and rec.') {
        return park
      } else if (type == 'environment') {
        return river
      } else if (type == 'building') {
        return building
      } else if (type == 'culture') {
        return culture
      } else if (type == 'education') {
        return education
      } else {
        return 'http://bulma.io/images/placeholders/1280x960.png'
      }
    }
  }
}
</script>

<style scoped>
  .card-content {
    height: 40vh;
    overflow: scroll;
  }
</style>
