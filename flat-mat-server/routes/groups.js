var express = require('express');
var router = express.Router();
var groupsService = require('../services/groups');

// Create new user
router.post('/', (req, res, next) => {
  groupsService.createGroup(req.body.groupName, req.body.userId).then(grp=>{
      res.status(grp === undefined ? 500 : 200).send(grp);
  });
});

// Get user by id
router.get('/:groupId', (req, res, next) => {
  groupsService.getGroupById(req.params.groupId).then(grp=>{
    console.log('group is: ' + grp);
    res.status(grp === undefined ? 404 : 200).send(grp);
  });
});

module.exports = router;
