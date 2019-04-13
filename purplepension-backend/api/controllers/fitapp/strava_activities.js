var express = require("express");
var router = express.Router();
var request = require("request");
const config = require("../../../data/strava_config");
const HOST = "https://www.strava.com";
const API = "/api/v3";

router.get("/", function(req, res) {
  args = {};
  if (req.query.per_page) args.maxActivities = req.query.per_page;
  if (req.query.page) args.page = req.query.page;
  if (req.query.before) args.before = req.query.before;
  if (req.query.after) args.after = req.query.after;
  var uri = `${HOST}${API}/athlete/activities/`;
  args.headers = {
    Authorization: "Bearer " + config.access_token,
    "Content-Type": "application/json"
  };
  request.get(uri, args, function(err, response, body) {
    if (!err) {
      if (body.message === "Authorization Error")
        return res.redirect("../fitapp/getaccess");
      res.send(body);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;