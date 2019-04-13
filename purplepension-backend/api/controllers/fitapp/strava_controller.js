var express = require('express')
var router = express.Router()
var request = require('request');
const config = require('../../../data/strava_config');

const HOST = 'https://www.strava.com';
const API = '/api/v3';


var athleteId = 32222651;

router.use(function timeLog (req, res, next) {
    next()
})

router.get('/stats', function (req, res) {
    args = {
        "json": {

        }
        //'id': athleteId
    }
    var endpoint = "/athletes/" + athleteId.toString() + "/stats";

    var uri = HOST + API + endpoint;
    args.headers = {
        "Authorization": "Bearer " + config.access_token,
        "Content-Type": "application/json"
    }

    request.get(uri, args, function(err, response, body) {
        if(!err) {
            res.send(body)
        }
        else {
            console.log(err);
        }
    });

})

router.get("/getacces", function (req, res ) {
    var scope = 'activity:read_all';
    var redirectUri = 'http://localhost:3000/api/fitapp/receiveacces';
    var uri = 'https://www.strava.com/oauth/authorize?client_id=' + config.client_id +'&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scope;
    return res.redirect(uri);
})

router.get("/receiveacces", function (req, res) {
    var code = req.query.code;
    var scope = req.query.scope;
    
    var uri = HOST + '/oauth/token?client_id=' + config.client_id + '&client_secret=' + config.client_secret + '&code='+ code + '&grant_type=authorization_code';
    var args = { headers: { "Authorization": "Bearer " + config.access_token,
        "Content-Type": "application/json"
        } 
    }

    request.post(uri, args, function(err, response, body) {
        if(!err) {
            //Body zouden we eigenlijk in de db moeten opslaan!!
            var refresh_token = body.refresh_token;
            console.log(body);
            
            var access_token = JSON.parse(body).access_token;

            console.log('token:');
            console.log(access_token);

            return res.redirect('../fitapp/activities?access_token=' + access_token);
            //res.send(body)
        }
        else {
            console.log(err);
            res.send(err);
        }
    })
})

router.get('/activities', function (req, res) {
    args = {
        "json": {

        }
    }

    if(req.query.per_page) args.json.maxActivities = req.query.per_page;
    if(req.query.page)     args.json.page   = req.query.page;
    if(req.query.before)   args.json.before = req.query.before;
    if(req.query.after)    args.json.after  = req.query.after;
    
    //-----
    var uri = HOST + API + "/athlete/activities/";
    args.headers = {
        "Authorization": "Bearer " + config.access_token,
        "Content-Type": "application/json"
    }

    console.log('------------------------------')
    console.log(req.query.access_token);

    request.get(uri, args, function(err, response, body) {
        if(!err) {
            if(body.message === 'Authorization Error') return res.redirect('../fitapp/getacces');
            res.send(body)
        }
        else {
            console.log(err);
        }
    });


})

module.exports = router