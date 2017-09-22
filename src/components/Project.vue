<template>
  <div class="column is-half-mobile is-one-third-desktop">
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
            </div>
          </div>
          <div class="content">
            {{project.desc}}
            <br>
            <br>
            <div class="">
              <div class="">
                <span class="tag is-dark">Deadline</span>
                {{daysLeft}}
              </div>
              <div class="">
                <span class="tag is-dark">Contributed</span>
                ${{project.money}}
              </div>
              <div class="">
                <span class="tag is-dark">Target</span>
                ${{project.target}}
              </div>
            </div>
          </div>
        </div>
        <footer v-if="isSignedIn" class="card-footer">
          <b-field v-if="projectNotMet" class="card-footer-item">
            <span class="amount">Amount: </span>
            <br>
            <input v-model="amount" class="input" type="number" placeholder="Amount" value=""></input>
          </b-field>
          <a v-on:click="method1" v-if="projectNotMet" class="card-footer-item" v-bind:id="project.id">Contribute</a>
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
import contract from "truffle-contract"
import CrowdFunding from '../../build/contracts/CrowdFunding.json'
import Web3 from 'web3'

const url = "https://city-block-server.herokuapp.com"

export default {
  name: 'project',
  props: ['project', 'isSignedIn'],
  data(){
    return {
      amount: 0.0,
      money: this.project.money
    }
  },
  computed: {
    daysLeft() {
      let deadline = new Date(`
        ${new Date(this.project.date).getMonth() + 1}/
        ${new Date(this.project.date).getDate() + 1}/
        ${new Date(this.project.date).getFullYear()}
      `)
      deadline.setMonth(deadline.getMonth() + 3)
      return `${deadline.getMonth() + 1}/${deadline.getDate()}/${deadline.getFullYear()}`
    },
    projectNotMet(){
      return this.project.money < this.project.target
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
    },
    method1(event){
      event.preventDefault();
      let amountContribute = this.amount
      let currentMoney = this.money

      if (typeof this.web3 !== 'undefined') {
        this.web3Provider = web3.currentProvider;
        this.web3 = new Web3(web3.currentProvider)
      } else {
        this.web3Provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        this.web3 = new Web3(this.web3Provider)
      }

      let provider = this.web3Provider;
      let deployedInstance;
      let MyContract = contract(CrowdFunding);
      let account = web3.eth.defaultAccount
      MyContract.setProvider(provider)
      MyContract.defaults({
        from: account,
        value: amountContribute
      })

      MyContract.deployed()
        .then(function(instance){
          deployedInstance = instance;
          return deployedInstance.contribute(event.target.id, amountContribute)
        }).then(function(result){
          const currUser = localStorage.getItem('userId')
          const settings = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              amount: amountContribute,
              project_id: event.target.id,
              account_id: currUser
            })
          };
          const patchSettings = {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              money: parseFloat(currentMoney) + parseFloat(amountContribute)
            })
          };
          fetch(`${url}/contributions`, settings)
          .then(data => {
          fetch(`${url}/projects/${event.target.id}`, patchSettings)
            .then(data => data.json())
            .then(data =>{
              location.href = '/'
            })
          })
        })
      }
  }
}
</script>

<style scoped>
  .card-content {
    height: 40vh;
    overflow: scroll;
  }
  .amount {
    padding-right: .5em;
  }
</style>
