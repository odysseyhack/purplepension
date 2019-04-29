var express = require("express");
var router = express.Router();
const bc_handler = require('../../../blockchain/contract_handler');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));


router.get("/", (req, res) => {
  const myContract = new web3.eth.Contract(
    bc_handler.getABI("Activity"),
    // TODO: Change address to one of the deployed Activity contracts
    "0x5757935B3A4e68C2546888787738e9Ee729eF4D2"
  )
    .methods.viewData.call({
      //TODO: Change from address to one of the ganache addresses
      from: "0xfd6A28837895858b3eF08b77269a666725B2B1a0"
    })
    .then(result => {
      return res.send({
        user: result[0],
        event: result[1]
      });
    });
});

module.exports = router;