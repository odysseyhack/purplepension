var express = require("express");
var router = express.Router();
const activity_view = require('./activity_view'),
activity_events = require('./activity_events');

router.use('/view', activity_view);
router.use('/events', activity_events);

module.exports = router;
