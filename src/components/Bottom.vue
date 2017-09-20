<template>
  <div class="bottom">
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>cityBlock</strong> by <a href="https://github.com/block-squad/">The Block Squad </a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <!-- <i class="fa fa-github"></i> -->
            </a>
          </p>
          <button v-on:click="method1" type="button" name="button">TEST</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import contract from "truffle-contract"
import CrowdFunding from '../../build/contracts/CrowdFunding.json'

export default {
  name: 'bottom',
  props: ['web3Provider', 'web3'],
  methods: {
    method1(event){
      event.preventDefault();
      let provider = this.web3Provider;
      console.log(provider);
      console.log(contract);
      console.log(CrowdFunding);
      let contract_address = "0x7091d60e8c51c5fcdd424badcde99ec6d9fbb3a5"
      let deployedInstance;
      let MyContract = contract(CrowdFunding);
      console.log(MyContract);

      console.log(this.web3.eth.accounts);
      MyContract.setProvider(provider)
      MyContract.deployed().then(instance => {
        console.log(instance);
        deployedInstance = instance
        return deployedInstance.getContributors()
      }).then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err);
      })

    }
  }
}
</script>
