import CrowdFunding from '../../build/contracts/CrowdFunding.json'

App = {
  web3Provider: null,
  contracts: {},

  init: function() {

    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // If no injected web3 instance is detected, fallback to the TestRPC.
      App.web3Provider = new web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    // Get the necessary contract artifact file and instantiate it with truffle-contract.
    var CrowdFundingArtifact = CrowdFunding;
    App.contracts.CrowdFunding = TruffleContract(CrowdFundingArtifact);

    // Set the provider for our contract.
    App.contracts.CrowdFunding.setProvider(App.web3Provider);

    // Use our contract to retieve and mark the adopted pets.
    App.markFinished();

    return App.bindEvents();
  },

  bindEvents: function() {
    // $(document).on('click', '.btn-adopt', App.handleAdopt);
    // TODO: add a event handler on the contribute button to run the App.handleContribute function
  },

  handleContribution: function() {
    event.preventDefault();

    // var projectId = parseInt($(event.target).data('id'));
    // TODO: capture project id from target address??

    var contributeInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.CrowdFunding.deployed().then(function(instance) {
        contributeInstance = instance;

        return contributeInstance.adopt(projectId, {from: account});
      }).then(function(result) {
        return App.markContribute();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  markContribute: function(contriutors, account){

  }

  markFinished: function(contriutors, account) {
    var contributeInstance;

    App.contracts.CrowdFunding.deployed().then(function(instance) {
      contributeInstance = instance;

      return contributeInstance.getContributors.call();
    }).then(function(contributors) {
      for (i = 0; i < contributors.length; i++) {
        if (contributors[i] !== '0x0000000000000000000000000000000000000000') {
          // $('.panel-pet').eq(i).find('button').text('Pending...').attr('disabled', true);
          // TODO: append pending... to project card in view
        }
      }
    }).catch(function(err) {
      console.log(err.message);
    });
  }

};

// $(function() {
//   $(window).load(function() {
//     App.init();
//   });
// });
// We need to call App.init() when the page loads
