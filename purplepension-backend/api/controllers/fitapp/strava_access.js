var express = require("express");
var router = express.Router();
var request = require("request");
var fs = require("fs");
const config = require("../../../data/strava_config");//const config = JSON.parse(fs.readFileSync('../../../data/strava_config', 'utf8'));
const HOST = "https://www.strava.com";

router.get("/", function(req, res) {  
  var redirectUri = "http://localhost:3000/api/fitapp/access/receive";
  var uri = `https://www.strava.com/oauth/authorize?client_id=${config.client_id}&redirect_uri=${redirectUri}&response_type=code&scope=activity:read_all`;
  return res.redirect(uri);
});

router.get("/receive", function(req, res) {
  const uri = `${HOST}/oauth/token?client_id=${config.client_id}&client_secret=${config.client_secret}&code=${req.query.code}&grant_type=authorization_code`;
  const args = { headers: {
      Authorization: "Bearer " + config.access_token,
      "Content-Type": "application/json"
  }};
  request.post(uri, args, function(err, response, body) {
    if (!err) {
      var access_token = JSON.parse(body).access_token;

      fs.truncate("./data/activity_token", 0, function() {
        fs.writeFile("./data/activity_token", access_token, function (err) {
            if (err) {
                return console.log("Error writing file: " + err);
            }
        });
      });

      return res.redirect(`../activity?access_token=${access_token}`);
    } else {
      console.log('Error: ' + err);
      res.send(err);
    }
  });
});

module.exports = router;