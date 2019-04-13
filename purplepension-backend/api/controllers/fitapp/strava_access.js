var express = require("express");
var router = express.Router();
var request = require("request");
const config = require("../../../data/strava_config");
const HOST = "https://www.strava.com";
const API = "/api/v3";
const athleteId = 32222651;

router.get("/", function(req, res) {
  var scope = "activity:read_all";
  var redirectUri = "http://localhost:3000/api/fitapp/receiveacces";
  var uri =
    "https://www.strava.com/oauth/authorize?client_id=" +
    config.client_id +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=code&scope=" +
    scope;
  return res.redirect(uri);
});

router.get("/receive", function(req, res) {
  const uri = `${HOST}/oauth/token?client_id=${
    config.client_id
  }&client_secret=${config.client_secret}&code=${
    req.query.code
  }&grant_type=authorization_code`;
  const args = {
    headers: {
      Authorization: "Bearer " + config.access_token,
      "Content-Type": "application/json"
    }
  };
  request.post(uri, args, function(err, response, body) {
    if (!err) {
      var access_token = JSON.parse(body).access_token;

      return res.redirect("../fitapp/activities?access_token=" + access_token);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;