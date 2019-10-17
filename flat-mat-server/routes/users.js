var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoDB = require('../config/mongo-db');
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  name: String
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create new user
router.post('/:name', (req, res, next) => {
  console.log('Adding user ' + req.params.name);
  new SomeModel({name: req.params.name}).save((err, usr)=>{
    if (err)
      next(err);
  res.send(usr);
  });
});

// Get user by id
router.get('/:userId', (req, res, next) => {
  SomeModel.findById(req.params.userId, (err, usr)=>{
    if (err)
      next(err);
    res.send(usr);
  });
});

module.exports = router;
