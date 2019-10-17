const router = require('express').Router();
const passport = require('passport');


const authMiddleware = (req, res, next) => {
    if (req.user) next();
    else res.redirect('/auth/google');
};

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/auth/err', session: true }), (req, res) => {
    res.send('Welcome ' + req.user.name);
    //res.redirect('http://localhost:4200')
});

router.get('/check', authMiddleware, (req, res) => {
    res.send('Welcome ' + req.user.name);
});

router.get('/err', (req, res)=>res.status(401).send('FAILURE'));

module.exports = { router, authMiddleware };