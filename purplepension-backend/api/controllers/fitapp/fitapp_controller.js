const express = require("express"),
  router = express.Router(),
  app = express();

router.get("/", (req, res) => {
  console.log("I am getting!");
  res.send("Hello World");
});

module.exports = router;
