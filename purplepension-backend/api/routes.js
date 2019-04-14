const express = require("express"),
  app = express(),
  router = express.Router(),
  fitapp = require("./controllers/fitapp/strava_controller"),
  activity = require("./controllers/activity/activity_controller")

router.use("/fitapp", fitapp);
router.use("/activity", activity)

module.exports = router;
