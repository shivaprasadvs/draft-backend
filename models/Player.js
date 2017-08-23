var mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost:27017/players');
var playerSchema = mongoose.Schema({
    firstName : String,
    lastName: String,
    email: String,
    dateOfBirth: Date,
    specialityRole: String,
    battingPosition: String,
    battingStyle: String,
    bowlingStyle: String,
    interestInCaptaincy: String

});

var Player = connection.model('Player', playerSchema);
module.exports = Player;