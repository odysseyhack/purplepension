var express = require("express");
var router = express.Router();
const bc_handler = require('../../../blockchain/contract_handler');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));


router.get("/", (req, res) => {
  const myContract = new web3.eth.Contract(
    bc_handler.getABI("Activity"),
    "0x3f53488287FD76A165a294Ab18b3813CEd14f5E8"
  )
    .methods.viewData.call({
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