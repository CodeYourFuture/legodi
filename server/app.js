var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
 const formidable = require('express-formidable')

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
 
app.use(formidable())


var router = require('./routes/api');
var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');
var adminAddArtice= require('./routes/addArticle');

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);
app.use('/api', router);
app.use('/admin/add/article', adminAddArtice);

app.post('/admin/add/addarticle',(req,res)=>{
  console.log(req.fields)
  res.json(req.fields)
})
 

module.exports = app;
