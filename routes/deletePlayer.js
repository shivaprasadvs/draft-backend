var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = require('../models/Player');
mongoose.Promise = global.Promise;


router.post('/', function(req, res) {

Player.findByIdAndRemove(req.body._id, function (err) {
  if (err) {
      
    res.send("error"); 
  } 
    res.send("success");
  
});
 
});

module.exports = router;