var express = require('express');
var router = express.Router();
const category = require('../dbClients/categoriesDB');

router.get("/", function (req, res, next) {
  res.send('admin');
});

router.get("/categories/add", function (req, res, next) {
  res.render('category');
});

router.post('/categories/add', function (req, res, next) {
  const query = req.body;
  const callback = () => {
    res.redirect("/");
    res.end()
  }
  category(query, callback);
});

module.exports = router;



