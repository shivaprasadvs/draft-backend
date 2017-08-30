var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;


router.post('/', function(req, res) {
 var player = new Player(req.body);
player.save(function (err) {
  if (err) {
    res.send(err); 
  } 
    res.send("success");
  
});
 
});

module.exports = router;
