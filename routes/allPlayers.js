var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;


router.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
    Player.find({}).exec(function (err, players) {
  if (err) {
    res.send(err); 
  } 
    res.json(players);
  
});
 
});

module.exports = router;