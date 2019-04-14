var express = require("express");
var router = express.Router();
const bc_handler = require("../../../blockchain/contract_handler");
const moment = require('moment');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

router.get("/sign", (req, res) => {
  const eventsToReturn = [];
  const myContract = new web3.eth.Contract(
    bc_handler.getABI("Activity"),
    "0x3f53488287FD76A165a294Ab18b3813CEd14f5E8"
  )
    .getPastEvents(
      "ActivitySigned",
      {
        fromBlock: 0,
        toBlock: "latest"
      },
      (error, events) => console.log(events)
    )
    .then(events => {
      events.forEach((val, index) => {
        eventsToReturn.push({
          signedBy: val.returnValues.signedBy,
          name: val.returnValues.name,
          timestamp: moment.unix(val.returnValues.timestamp.toNumber()).format('YYYY-MM-DD')
        });
      });
      return res.send(eventsToReturn);
    });
});

router.get("/access", (req, res) => {
  const eventsToReturn = [];
  const myContract = new web3.eth.Contract(
    bc_handler.getABI("Activity"),
    "0x3f53488287FD76A165a294Ab18b3813CEd14f5E8"
  )
    .getPastEvents(
      "DataViewed",
      {
        fromBlock: 0,
        toBlock: "latest"
      },
      (error, events) => console.log(events)
    )
    .then(events => {
      events.forEach((val, index) => {
        eventsToReturn.push({
          signedBy: val.returnValues.accessor,
          name: val.returnValues.name,
          timestamp: moment.unix(val.returnValues.timestamp.toNumber()).format('YYYY-MM-DD')
        });
      });
      return res.send(eventsToReturn);
    });
});

module.exports = router;
