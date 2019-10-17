
//Import the mongoose module
var mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://root:1234@mongo-database-instance:27017/admin';
mongoose.connect(url, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;