const router = require('express').Router();
const authService = require('../services/auth');

router.get('/get-url', (req, res)=>{
    res.send(authService.getGoogleUrl());
});

router.get('/google-login', async(req, res) => {
    const data = await authService.googleLogin(req.query.access_token);
    res.send({access_token: data});
})

module.exports = router;
