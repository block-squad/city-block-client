const contract = {
  web3: new Web3(new Web3.providers.HttpProvider("http://localhost:8545")),
  abiDefinition:   '[
      {
        "constant": false,
        "inputs": [
          {
            "name": "campaignID",
            "type": "uint256"
          }
        ],
        "name": "checkGoalReached",
        "outputs": [
          {
            "name": "reached",
            "type": "bool"
          }
        ],
        "payable": false,
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "campaignID",
            "type": "uint256"
          }
        ],
        "name": "contribute",
        "outputs": [],
        "payable": false,
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "beneficiary",
            "type": "address"
          },
          {
            "name": "goal",
            "type": "uint256"
          },
          {
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "newCampaign",
        "outputs": [
          {
            "name": "campaignID",
            "type": "uint256"
          }
        ],
        "payable": false,
        "type": "function"
      }
    ]',

  createProject: function() {
    let funder = web3.eth.accounts[0]
    let amount =
    }
    struct Campaign {
        address beneficiary;
        uint fundingGoal;
        uint numFunders;
        uint amount;
        uint deadline;
  }
}

export default contract
