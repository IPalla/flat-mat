var mongoose = require('mongoose');
var mongoDB = require('../config/mongo-db');
// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  photo: String,
  email: String,
  phone: String
});

// Compile model from schema
module.exports = mongoose.model('UserModel', UserSchema );
