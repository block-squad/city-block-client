import Web3 from 'web3'
import CrowdFunding from '../../build/contracts/CrowdFunding.json'


var App = {
  web3Provider: null,
  contracts: {},

  //running initWeb3 should automatically load whent the app starts
  initWeb3: function() {

    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // If no injected web3 instance is detected, fallback to the TestRPC.
      App.web3Provider = new web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(App.web3Provider);
    }

    // return App.initContract();
  },

  initContract: function() {
      var ContributeArtifact = CrowdFunding;
      //TODO: how to require TruffleContract from what I assume is the truffle-contract file
      App.contracts.Contribute = TruffleContract(ContributeArtifact);
      App.contracts.Contribute.setProvider(App.web3Provider);
  }

  // TODO:  This binds the event handler to the element, will be done in component
  // bindEvents: function() {
  //   $(document).on('click', '.btn-adopt', App.handleContribute);
  // },

  // TODO: This function will likely be written again in the component
  // handleContribute: function() {
  //   event.preventDefault();
  //
  //   // var petId = parseInt($(event.target).data('id'));
  //   // TODO: should be the project ID of the project
  //

  // TODO: This code is important, as this is how you handle a contribution
  //   var contributeInstance;
  //
  //   web3.eth.getAccounts(function(error, accounts) {
  //     if (error) {
  //       console.log(error);
  //     }
  //
  //     var account = accounts[0];
  //
  //     App.contracts.Contribute.deployed().then(function(instance) {
  //       contributeInstance = instance;
  //
  //       return contributeInstance.contribute(projectId, {from: account});
  //     }).then(function(result) {
  //       return App.markContributed();
  //     }).catch(function(err) {
  //       console.log(err.message);
  //     });
  //   });
  //
  // },

  // TODO: This function will also likely exist in the components
  // markContributed: function(contributors, account) {
  //   var contributeInstance;
  //
  //   App.contracts.Contribute.deployed().then(function(instance) {
  //     contributeInstance = instance;
  //
  //     return adoptionInstance.getContributors.call();
  //   }).then(function(contributors) {
  //     for (i = 0; i < contributors.length; i++) {
  //       if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
  //         // $('.panel-pet').eq(i).find('button').text('Pending...').attr('disabled', true);
  //         //TODO: This should show that you have contributed to a project
  //       }
  //     }
  //   }).catch(function(err) {
  //     console.log(err.message);
  //   });
  // }

};

export default App
