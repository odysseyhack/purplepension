const express = require('express');
const app = express();
const PORT = 3000;


var strava_controller = require('./controllers/strava_controller');
app.use('/strava', strava_controller);
app.listen(PORT);
console.log('Server started on ' + PORT.toString())
