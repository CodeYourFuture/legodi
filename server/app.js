const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/api');
const index = require('./routes/index');
const adminArticles = require('./routes/admin/articles/articles');
const adminCategories = require('./routes/admin/categories/categories');
const autentication = require('./routes/admin/authentication/login');
 
const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
 
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
errorFormatter: (param, msg, value) =>{
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

  while(namespace.length) {
    formParam += '[' + namespace.shift() + ']';
  }
  return {
    param : formParam,
    msg   : msg,
    value : value
  };
}
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
res.locals.user = req.user || null;
next();
});


app.use('/', index);
app.use('/admin/articles', adminArticles);
app.use('/admin/categories', adminCategories);
app.use('/api', router);
app.use('/admins',autentication) 

// catch 404 and forward to error handler
app.use( (req, res, next) =>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use( (err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;