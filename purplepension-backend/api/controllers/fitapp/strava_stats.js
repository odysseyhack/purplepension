var express = require("express");
var router = express.Router();
var request = require("request");
const config = require("../../../data/strava_config");
const HOST = "https://www.strava.com";
const API = "/api/v3";
const athleteId = 32222651;

router.get("/", (req, res) => {
  const uri = `${HOST}${API}/athletes/${athleteId}/stats`;
  const args = {
    headers: {
      Authorization: `Bearer ${config.access_token}`,
      "Content-Type": "application/json"
    }
  };
  request.get(uri, args, function(err, response, body) {
    res.setHeader('Content-Type', 'application/json');
    if (!err) res.send(body);
    else console.log(err);
  });
});

module.exports = router;
