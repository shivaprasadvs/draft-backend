var mongoose = require('mongoose');


var playerSchema = mongoose.Schema({
    firstName : String,
    lastName: String,
    email: String,
    dateOfBirth: String,
    specialityRole: String,
    battingPosition: String,
    battingStyle: String,
    bowlingStyle: String,
    interestInCaptaincy: String

});

var Player = mongoose.model('Player', playerSchema);
module.exports = Player;