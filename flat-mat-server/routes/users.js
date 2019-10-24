var express = require('express');
var router = express.Router();
var usersService = require('../services/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  usersService.getAllUsers().then(usrs=>res.send(usrs));
});

// Create new user
router.post('/', (req, res, next) => {
  console.log('Adding user ' + req.body);
  usersService.insertUser(req.body).then(usr=>{
      res.status(usr === undefined ? 500 : 200).send(usr);
  });
});

// Get user by id
router.get('/:userId', (req, res, next) => {
  usersService.getUserById(req.params.userId).then(usr=>{
    console.log('User is: ' + usr);
    res.status(usr === undefined ? 404 : 200).send(usr);
  });
});

module.exports = router;
