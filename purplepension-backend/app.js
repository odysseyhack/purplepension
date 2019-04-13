const cors = require('cors')
const express = require("express"),
  router = express.Router(),
  app = express(),
  bodyParser = require("body-parser"),
  routes = require("./api/routes"),
  PORT = 3000;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
