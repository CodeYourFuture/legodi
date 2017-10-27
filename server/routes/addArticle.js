var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('add-articles');
});

 
 
module.exports = router;


