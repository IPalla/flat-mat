'use strict'
const https = require('https');
const fetch = require('node-fetch');

const googUrl = {
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    client_id: '266429742545-9tvej5149gs8qrb07avvl3793ej3eqft.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:4200/google-redirect',
    response_type: 'token',
    scope: 'profile+email',
    state: 'todefine'
};

function getGoogleOauthConsentUrl(){
    return googUrl.url + '?client_id=' + googUrl.client_id + '&redirect_uri=' + googUrl.redirect_uri
        + '&response_type=' + googUrl.response_type + '&scope=' + googUrl.scope + '&state=' + googUrl.state;
}

function getProfileInfoFromToken(token){
    console.log('Requesting google for token: ' + token)
    const reqOptns = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    return fetch('https://www.googleapis.com/userinfo/v2/me', reqOptns)
        .then(res => res.json());
}

module.exports = { getGoogleOauthConsentUrl, getProfileInfoFromToken };