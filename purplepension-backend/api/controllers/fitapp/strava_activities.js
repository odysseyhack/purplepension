var express = require("express");
var router = express.Router();
var request = require("request");
var fs = require("fs");
const config = require("../../../data/strava_config");//const config = JSON.parse(fs.readFileSync('../../../data/strava_config', 'utf8'));
const HOST = "https://www.strava.com";
const API = "/api/v3";

router.get("/", function(req, res) {
  args = {};
  if (req.query.per_page) args.maxActivities = req.query.per_page;
  if (req.query.page) args.page = req.query.page;
  if (req.query.before) args.before = req.query.before;
  if (req.query.after) args.after = req.query.after;
  var uri = `${HOST}${API}/athlete/activities/`;

  activity_token = fs.readFileSync("./data/activity_token");
  

  args.headers = {
    Authorization: "Bearer " + activity_token,//config.access_token,
    "Content-Type": "application/json"
  };
  request.get(uri, args, function(err, response, body) {
    res.setHeader('Content-Type', 'application/json');
    if (!err) {
      var msg = JSON.parse(body).message;
      if (msg === "Authorization Error") return res.redirect("../fitapp/access");
      res.send(body);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;