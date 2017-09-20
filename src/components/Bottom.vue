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
  props: ['web3Provider'],
  methods: {
    method1(event){
      event.preventDefault();
      let provider = this.web3Provider;
      console.log(provider);
      console.log(contract);
      console.log(CrowdFunding);
      let account_one = "0x1341bce9c74eb9fb72d1dc5a3cb221dd91334fdf"
      let account_two = "0xdb09cf6d27ef22742e432e6585fb2b181e11a308"
      let contract_address = "0x2773eb27e2da8a35a31714a4c99737c559ea65f2"
      let MyContract = contract(CrowdFunding);
      MyContract.setProvider(provider)
      MyContract.deployed().then(instance => {
        console.log(instance);
      })

    }
  }
}
</script>
