<template>
  <div class="about">
    <div class="hero-body">
    </div>
    <div class="howto box container">
      <h1 class="title"><strong>How To Use cityBlock: </strong></h1>
      <ul>
        <li> If you don’t already have one, you will need an <a href="https://ethereum.org">Ethereum Wallet</a> fully loaded with <a href="https://ethereum.org/ether">Ether</a>  to interact with this application. </li>
        <br>
        <li> To make it easy on yourself you should also install <a href="https://metamask.io/">MetaMask</a>, a Chrome extension that hosts your Ethereum Wallet, will allow you to create new projects or contribute to existing projects on cityBlock.  </li>
        <br>
        <li> Once you have MetaMask installed make sure you have the network (in the upper right corner of MetaMask) set to <strong>‘localhost 8545’.</strong></li>
        <br>
        <li> Create an account on cityBlock by creating a username and password and providing the public key (aka account address) of your Wallet. </li>
        <br>
        <li> The projects hosted on cityBlock are projects that your fellow Denverites have proposed in an effort to improve the urban environment. Provided the target amount is raised via community contributions the city has agreed to initiate these projects and supply the resources necessary to complete them. </li>
        <br>
        <li> If the target amount is not met by the deadline the value of each contribution made will be returned to the Wallet of each contributor. </li>
      </ul>
      <br>
      <div class="thanks">
        <h3> <strong>made with <span className="footer_gradient_text">&hearts;</span> by Block Squad</strong></h3>
      </div>
    </div>
  </div>
</template>

<script>
import Brand from './Brand'
export default {
  name: 'about',
  components: {
    Brand
  }
}
</script>

<style scoped>
  .hero-body {
    background: url('../assets/cb-about.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 85vh;
  }
  .box {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
    margin-bottom: 3vh;
    padding: 50px;
  }
  li {
    list-style-type: disc;
  }
</style>
