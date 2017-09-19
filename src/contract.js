web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const abiDefinition =
'[
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
]'

const bytecode =  "0x6060604052341561000f57600080fd5b5b6103768061001f6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416635b2329d48114610053578063c1cbbca71461007d578063df175e9b14610095575b600080fd5b341561005e57600080fd5b6100696004356100d9565b604051901515815260200160405180910390f35b341561008857600080fd5b61009360043561028c565b005b34156100a057600080fd5b6100c773ffffffffffffffffffffffffffffffffffffffff600435166024356044356102f4565b60405190815260200160405180910390f35b600081815260016020819052604082209081015460038201548391829182918291106101b0576002850154855460038701546000965091945073ffffffffffffffffffffffffffffffffffffffff169080156108fc0290604051600060405180830381858888f150506000600389018190558854600160a060020a0319168955600189018190556004890181905560028901555050505b8284116101a757600084815260058601602052604081208054600160a060020a031916815560019081019190915590930192610170565b60019550610282565b600485015443901161027d5750506002830180548454600160a060020a03191685556000600186018190559182905560048501829055600385018290555b8082116101a757600082815260058601602052604090819020805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169181156108fc02919051600060405180830381858888f1505050600084815260058801602052604081208054600160a060020a031916815560019081019190915590930192506101ee9050565b60019550610282565b600095505b5050505050919050565b60008181526001602081815260408084206002810180548086019091558552600581019092529092208054600160a060020a0319163373ffffffffffffffffffffffffffffffffffffffff16178155349181018290556003830180549092019091555b505050565b6000805460018082018355818352602081905260409092208054600160a060020a03191673ffffffffffffffffffffffffffffffffffffffff87161781559182018490554383016004830155905b5093925050505600a165627a7a723058209ad887d40096e9af898e4e95a3a1f1b751f92ca01af818827a75b2a8dfa809210029"
