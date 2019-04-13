const express = require("express"),
  app = express(),
  router = express.Router(),
  fitapp = require("./controllers/fitapp/strava_controller");

router.use("/fitapp", fitapp);

module.exports = router;
