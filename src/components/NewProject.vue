<template>
  <section class="newproject section container">
    <form v-on:submit.prevent="newProject">
      <b-field label="Project Name">
        <input v-model="newProjectForm.name" class="input" type="text"></input>
      </b-field>
      <b-field label="Type">
        <b-select v-model="newProjectForm.type" placeholder="Select type">
          <option>Parks / Rec</option>
          <option>Streets / Roads</option>
          <option>Education</option>
          <option>Building</option>
          <option>Culture</option>
          <option>Environment</option>
        </b-select>
      </b-field>
      <b-field label="Description">
        <b-input v-model="newProjectForm.desc" type="textarea"></b-input>
      </b-field>
      <b-field label="Target Amount">
        <b-input v-model="newProjectForm.target" type="number" placeholder="0.00"></b-input>
      </b-field>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link">Cancel</button>
        </div>
      </div>
    </form>

  </section>

</template>

<script>

const url = "https://city-block-server.herokuapp.com"

export default {
  name: 'newproject',
  data(){
    return {
      newProjectForm: {
        name: "",
        type: "",
        desc: "",
        target: 0,
      }
    }
  },
  methods: {
    newProject(event){
      let currUser = localStorage.getItem('userId');
      if (currUser) {
        const settings = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.newProjectForm.name,
            type: this.newProjectForm.type,
            desc: this.newProjectForm.desc,
            money: 0,
            target: this.newProjectForm.target,
            date: new Date(),
            owner_id: parseInt(currUser),
            official_id: 5
          })

        };

        fetch(`${url}/projects`, settings)
          .then(data => data.json())
          .then(data => {
            location.href = '/'
          })
      }

    }
  }
}
</script>
