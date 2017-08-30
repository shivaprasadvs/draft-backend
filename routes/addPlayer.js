var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;


router.post('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
var player = new Player(req.body);
player.save(function (err) {
  if (err) {
    res.send(err); 
  } 
    res.send("success");
  
});
 
});

module.exports = router;
