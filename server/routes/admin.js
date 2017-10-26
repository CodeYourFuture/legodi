var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('admin');
});

router.get('/articles/add', function (req, res, next) {
  res.send('add-article');
});

module.exports = router;



