const router = require('express').Router();
const googleOauth = require('../google-auth/google');
// const passport = require('passport');


// const authMiddleware = (req, res, next) => {
//     if (req.user) next();
//     else res.redirect('/auth/google');
// };

// // auth with google+
// router.get('/google', passport.authenticate('google', {
//     scope: ['profile']
// }));

// // callback route for google to redirect to
// // hand control to passport to use code to grab profile info
// router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/auth/err', session: true }), (req, res) => {
//     res.send('Welcome ' + req.user.name);
//     //res.redirect('http://localhost:4200')
// });

// router.get('/check', authMiddleware, (req, res) => {
//     res.send('Welcome ' + req.user.name);
// });

// router.get('/err', (req, res)=>res.status(401).send('FAILURE'));

// module.exports = { router, authMiddleware };

router.get('/get-url', (req, res)=>{
    res.send({googleUrl: googleOauth.getGoogleOauthConsentUrl()});
});

router.get('/redirect-url', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    let data = googleOauth.getProfileInfoFromToken(req.query.acces_token);
    console.log(data);
    res.send(data);
})

module.exports = router;
