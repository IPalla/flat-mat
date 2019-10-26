var usersService = require('./users');
var googleAuth = require('./google-auth');
var jwtLib = require('../middleware/jwtokens');

function googleLogin(googleToken) {
    return googleAuth.getProfileInfoFromToken(googleToken).then(usrData=>{
        console.log('Rerieved info::');
        console.log(usrData);
        return usersService.findGoogleUser(usrData.id).then(alreadyReg=>{
            console.log('Find googleuser::');
            console.log(alreadyReg);
            return jwtLib.generateToken(alreadyReg ? alreadyReg : usersService.insertGoogleUser(usrData));
        });
    });
}

function getGoogleUrl(){
    return {googleUrl: googleAuth.getGoogleOauthConsentUrl()};
}

module.exports = {
    googleLogin,
    getGoogleUrl
};