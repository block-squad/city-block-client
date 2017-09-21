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
      let deployedInstance;
      let MyContract = contract(CrowdFunding);
      MyContract.setProvider(provider)
      MyContract.defaults({
        from: '0x1127f32f3bfa30b18ad837085d370ac83fc22ea7',
      })

      MyContract.deployed().then(function(instance){
        console.log(instance);
        deployedInstance = instance;
        return deployedInstance.contribute(1)
      }).then(function(result){
        console.log("success");
        console.log(result);
      })

      // MyContract.deployed().then(instance => {
      //   let deployedInstance = instance
      //   deployedInstance.contribute(1)
      // }).then(result => {
      //   console.log(result);
      //   console.log("hiiii!");
      // }).catch(err => {
      //   console.log(err);
      // })
    }
  }
}
</script>
