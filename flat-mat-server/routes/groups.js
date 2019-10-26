var express = require('express');
var router = express.Router();
var groupsService = require('../services/groups');
var jwtokens = require('../middleware/jwtokens');

// Create new group
router.post('/', jwtokens.authRequest, (req, res, next) => {
  groupsService.createGroup(req.body.groupName, req.decoded._id).then(grp=>{
      res.status(grp === undefined ? 500 : 200).send(grp);
  });
});

// Get user groups
router.get('/', jwtokens.authRequest, (req, res, next) => {
  console.log(req.decoded);
  groupsService.getUserGroups(req.decoded._id).then(grps=>{
    res.status(grps === undefined ? 204 : 200).send(grps);
  });
});

module.exports = router;
