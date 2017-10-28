var express = require('express');
var router = express.Router();
const addCategory = require('../dbClients/categoriesDB');
const dbClient = require('../dbClients/articlesDB')


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
  addCategory(query, callback);
});

router.get('/article/add', (req, res, next) => {
     res.render('add-articles');
  });

router.post('/article/add', (req, res) => {
  const query = req.body;
    const callBack = (data) => {
        res.redirect('/')
      res.end();
    }
    dbClient.addNewArticle(query, callBack)
})

module.exports = router;



