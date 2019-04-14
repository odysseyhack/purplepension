const Web3 = require("web3");
const fs = require("fs");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

module.exports = {
  getABI: function(contractName) {
    const parsed = JSON.parse(
      fs.readFileSync(`./build/contracts/${contractName}.json`)
    );
    return parsed.abi;
  },

  getByteCode: function(contractName) {
    const parsed = JSON.parse(
      fs.readFileSync(`./build/contracts/${contractName}.json`)
    );
    return parsed.bytecode;
  },

  deployContract: function(contractName) {
    const myContract = new web3.eth.Contract(this.getABI(contractName), this.getByteCode(contractName));
    return myContract.deploy({
      data: this.getByteCode(contractName)
    }).send({
      from: "0xfd6A28837895858b3eF08b77269a666725B2B1a0",
      gas: 4600000,
      gasPrice: ""
    });
  }
  // },

  // getPastEvents: function(contractName, address, eventName) {
  //   const myContract = new web3.eth.Contract(this.getABI(contractName), "0x1376023dE6C1198c1655e0Bb71F2Ed9cC9475Cc2")
  // }

};
