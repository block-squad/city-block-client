<template>
  <section class="newproject section container">
    <div class="box">
      <form v-on:submit.prevent="newProject">
        <h1 class="title">Create New Project</h1>
        <b-field label="Project Name">
          <input v-model="newProjectForm.name" class="input" type="text"></input>
        </b-field>
        <b-field label="Type">
          <b-select v-model="newProjectForm.type" placeholder="Select type">
            <option value="parks and rec.">Parks / Rec</option>
            <option value="street/roads">Streets / Roads</option>
            <option value="education">Education</option>
            <option value="building">Building</option>
            <option value="culture">Culture</option>
            <option value="environment">Environment</option>
          </b-select>
        </b-field>
        <b-field label="Description">
          <b-input v-model="newProjectForm.desc" type="textarea"></b-input>
        </b-field>
        <b-field label="Target Amount (in Ether)">
          <b-input v-model="newProjectForm.target" type="number" placeholder="0.00"></b-input>
        </b-field>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-dark">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link">Cancel</button>
          </div>
        </div>
      </form>
    </div>

  </section>

</template>

<script>

import contract from "truffle-contract"
import CrowdFunding from '../../build/contracts/CrowdFunding.json'
import Web3 from 'web3'

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
      this.method1(event)
    },
    method1(event){
      if (typeof this.web3 !== 'undefined') {
        this.web3Provider = web3.currentProvider;
        this.web3 = new Web3(web3.currentProvider)
      } else {
        console.log('Injected web3 Not Found!!!')
        this.web3Provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.web3 = new Web3(this.web3Provider)
      }

      event.preventDefault();
      let provider = this.web3Provider;
      let deployedInstance;
      let MyContract = contract(CrowdFunding);
      let account = web3.eth.defaultAccount
      MyContract.setProvider(provider)
      MyContract.defaults({
        from: account,
      })

      MyContract.new().then(function(instance){
        console.log(instance);
        deployedInstance = instance;
        return deployedInstance.newCampaign(account, .0005, new Date())
      }).then(function(result){
        console.log("success");
        console.log(result);
      })
    }
  }
}

</script>

<style scoped>
.box {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
