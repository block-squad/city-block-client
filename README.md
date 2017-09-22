## About
[cityBLOCK](http://city-block.herokuapp.com/#/) is a crowdfunding application that utilizes blockchain technology and smart contracts to support urban development projects. Using smart contracts (virtual agreements encoded and held in the blockchain), community members can create and contribute Ether (cryptocurrency) to urban development projects. If the funding target amount is raised by the deadline, the city is held responsible for carrying out the project.

#### Made with ♥ by [Block Squad](https://github.com/block-squad)
* [Ellen Downing](https://github.com/EllenDown)
* [Matt Drumheller](https://github.com/MattDrummy)
* [Maria Jose Mata](https://github.com/maria-mata)
* [Erin Shaben](https://github.com/eshaben)

#### Tech Notes
* Client built with Vue.js, Bulma, Solidity, Truffle.js, Web3.js, TestRPC, MetaMask, and Heroku.
* Server built with Node.js, Express.js, Knex.js, PostgreSQL, and Heroku.
* [Server repo](https://github.com/block-squad/city-block-server)
* [Deployed server](http://city-block-server.herokuapp.com/)

### How to Use
* You will need an [Ethereum](https://ethereum.org/) wallet and [MetaMask](https://metamask.io/) to interact with this application.
* In MetaMask (upper right corner), set the network to `localhost 8545`.
* In the cli/terminal start the testrpc (this is the test network to run the contract on) `testrpc --network-id 1505856162245`.
* Copy one of the private keys, and then in MetaMask import the account using that private key.
* Create an account on cityBLOCK using your wallet's public key (i.e. account address).
* Once logged in, you can post mock urban development projects and/or contribute mock funds to the project of your choice.
* All projects have a target fundraising goal and deadline. If the target amount is not met by the deadline, any funds raised will be returned to the contributors.
