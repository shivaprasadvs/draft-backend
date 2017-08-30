var mongoose = require('mongoose');
//var connection = mongoose.createConnection('mongodb://localhost:27017/players')
var connection = mongoose.createConnection('mongodb://admin:Getin12345xy@ds111204.mlab.com:11204/mcldraft/players');

var playerSchema = mongoose.Schema({
    auth_id: String,
    auth_service: String,
    firstName : String,
    lastName: String,
    email: String,
    dateOfBirth: Date,
    specialityRole: String,
    battingPosition: String,
    battingStyle: String,
    bowlingStyle: String,
    picture: String,
    interestInCaptaincy: String

});

var Player = connection.model('Player', playerSchema);
module.exports = Player;