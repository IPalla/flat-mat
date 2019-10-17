module.exports = {
    // We support returning promises.
    getAccessToken: function() {
        console.log('bbb');
      return new Promise('works!');
    },
  
    // Or, calling a Node-style callback.
    getAuthorizationCode: function(done) {
      console.log('aa');
      done(null, 'works!');
    },
  
    // Or, using generators.
    getClient: function(clientId, clientSecret) {
        console.log('getClient');
        console.log({clientId, clientSecret});
        return {'clientName': 'unnamedclient'};
    },
  
    // Or, async/wait (using Babel).
    getUser: function(username, pass) {
      console.log('getUser');
      console.log({username, pass});
      return {username, pass};
    },

    getAccessToken: function(accessToken) {
        console.log(getAccessToken);
        console.log(accessToken);
        return {
            'token.accessToken': 'asfd123asdf1234asdf12345',
            'token.accessTokenExpiresAt': 'asfd123asdf1234asdf12345',
            'token.client': 'asfd123asdf1234asdf12345',
            'token.client.id': 'asfd123asdf1234asdf12345',
            'token.user':this.getUser(),
        }
    }
  };  