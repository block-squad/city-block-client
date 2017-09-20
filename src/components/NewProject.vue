<template>
  <section class="newproject section container">
    <form v-on:submit.prevent="createProject">
      <b-field label="Project Name">
        <b-input type="text" v-model="newProjectForm.name"></b-input>
      </b-field>
      <b-field label="Type">
        <b-select placeholder="Select type" v-model="newProjectForm.type">
          <option>Parks / Rec</option>
          <option>Streets / Roads</option>
          <option>Education</option>
          <option>Building</option>
          <option>Culture</option>
          <option>Environment</option>
        </b-select>
      </b-field>
      <b-field label="Description" >
        <b-input type="textarea" v-model="newProjectForm.desc"></b-input>
      </b-field>
      <b-field label="Beneficiary">
        <b-input type="text" placeholder="0x0000000000000000000000" v-model="newProjectForm.beneficiary"></b-input>
      </b-field>
      <b-field label="Target Amount">
        <b-input type="text" placeholder="0.00" v-model="newProjectForm.target"></b-input>
      </b-field>
      <b-field label="Deadline">
        <b-input type="date" v-model="newProjectForm.date"></b-input>
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

import web3 from 'web3'

export default {
  name: 'newproject',
  data() {
    return {
      newProjectForm: {
        name: '',
        type: '',
        desc: '',
        beneficiary: '',
        date: '',
        target: ''
      }
    }
  },
  methods: {
    createProject(event) {
      
      // let amount =

    //   struct Campaign {
    //       address beneficiary;
    //       uint fundingGoal;
    //       uint numFunders;
    //       uint amount;
    //       uint deadline;
    // }
  }
  }
}
</script>
