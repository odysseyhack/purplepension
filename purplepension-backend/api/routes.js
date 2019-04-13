const express = require("express"),
  app = express(),
  router = express.Router(),
  fitapp = require("./controllers/fitapp/fitapp_controller");

router.use("/fitapp", fitapp);

module.exports = router;