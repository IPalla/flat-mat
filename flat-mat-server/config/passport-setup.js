const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser((user, done) => {
    console.log('Sserialize by: ', user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log('Deserialize by: ', user);
    done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID: '266429742545-9tvej5149gs8qrb07avvl3793ej3eqft.apps.googleusercontent.com',
        clientSecret: 'j8nepSc7H9StuGqvRUxYn7GH',
        callbackURL: '/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('displayName: ', profile.displayName);
        console.log('accesToken', accessToken);
        //console.log('error: ', err);
        done(null, {name: profile.displayName});
   }
));