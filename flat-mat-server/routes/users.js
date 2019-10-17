var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', passport.authenticate('google', { failureRedirect: '/auth/err'}), (req, res) => {
  res.send(req.user);
});

module.exports = router;
