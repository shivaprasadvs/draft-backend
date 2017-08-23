var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost:27017/players');

router.post('/', function(req, res) {
var db = mongoose.connection;

var player = new Player(req.body);
player.save(function (err) {
  if (err) {
    res.send(err); 
  } 
    res.send('meow');
  
});
 
});

module.exports = router;