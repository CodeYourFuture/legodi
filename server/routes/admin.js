var express = require('express');
var router = express.Router();
const saveCategory = require('../dbClients/categoriesDB');

router.get("/", function (req, res, next) {
  res.render('addCategory');
});

router.post('/', function (req, res, next) {
  const query = req.body;
  const callback = () => {
    res.redirect("/");
    res.end()
  }
  saveCategory(query, callback);
});

module.exports = router;



