var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*var OAuth = require('./middleware/oauth-config');
const Request = require('oauth2-server').Request;
const Response = require('oauth2-server').Response;*/

var memorystore = require('./example');
var OAuthServer = require('express-oauth-server');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.oauth = OAuthServer({
  model: memorystore,
  useErrorHandler: false, 
  continueMiddleware: false,
  options: {
      useErrorHandler: false
  }
});

app.post('/ouath', app.oauth.authorize(), (req, res, next) => {
    console.log('GET AUTH');
    /*let oReq =new Request(req);
    let oRes = new Response(res);
    OAuth.token(oReq, oRes).then(a=>console.log(a)).catch(a=>console.log(a));
    OAuth.authenticate(new Request(req), new Response(res)).then(res.send).catch(next);*/
    res.send({hola:'hola'});
});

app.get('/eee', (req, res, next) =>next({stack:'erro'}));

app.use((err, req, res, next) => {
    res.status(500).send({err});
});

module.exports = app;
