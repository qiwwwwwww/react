// require the dependencies
var mongoose = require('mongoose');

// connect to mongo database cheese
mongoose.connect('mongodb://localhost/cheese');

var db = mongoose.connection;

// make sure connection error will be written to the console
db.on('error', console.error.bind(console, 'connection fails:'));
// db.once('open', function(){
// schema and models
// });

db.once('open', console.log.bind(console, 'connection success:'));

module.exports = db;