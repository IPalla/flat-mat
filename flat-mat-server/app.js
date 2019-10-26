var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const authRoutes = require('./routes/authentication');

// const passportSetup = require('./config/passport-setup');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var groupsRouter = require('./routes/groups');
var expensesRouter = require('./routes/expenses');

var apm = require('elastic-apm-node').start({
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://apm-server:8200',
  serviceName: 'test'
});
var mongoDB = require('./config/mongo-db');

var app = express();

// // set up session cookies
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: ['thatsMyKey']
// }));

// // initialize passport
// app.use(passport.initialize());
// app.use(passport.session());


app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use('/', indexRouter);
app.use('/auth', authRoutes);
app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
app.use('/expenses', expensesRouter);
app.get('/generate-internal-error', (req, res, next)=>{
  next(createError(500));
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
