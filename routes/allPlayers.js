var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;


router.get('/', function(req, res) {
    Player.find({}).exec(function (err, players) {
  if (err) {
    res.send(err); 
  } 
    res.json(players);
  
});
 
});

module.exports = router;