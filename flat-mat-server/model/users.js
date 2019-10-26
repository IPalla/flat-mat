var mongoose = require('mongoose');
var mongoDB = require('../config/mongo-db');
// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, required: true},
  photo: String,
  email: {type: String, required: true},
  phone: String,
  google_id: String
});

var UserModel = mongoose.model('UserModel', UserSchema );

function insertUser(name, photo, email, phone, google_id){
  return new UserModel({
    name,
    photo,
    email,
    phone,
    google_id
  }).save().then((usr, err)=>{
      if (err) { throw err; }
      return usr;
  });
}

function getUserByGoogleId(google_id){
  return UserModel.findOne({google_id}).then((usr, err)=>{
    if (err) {return null;}
    return usr;
  })
}

function findAllUsers(){
  return UserModel.find().then((usrs)=>{
    return usrs;
  });
}

// Compile model from schema
module.exports = {
  insertUser,
  findAllUsers,
  getUserByGoogleId
}
