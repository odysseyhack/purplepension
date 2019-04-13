var express = require("express");
var router = express.Router();
var request = require("request");
const config = require("../../../data/strava_config");
const HOST = "https://www.strava.com";
const API = "/api/v3";
const athleteId = 32222651;
const stats_controller = require('./strava_stats'),
activity_controller = require('./strava_activities'),
access_controller = require('./strava_access');

router.use('/stats', stats_controller);
router.use('/activity', activity_controller);
router.use('/access', access_controller);

module.exports = router;
