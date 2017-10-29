var express = require('express');
var router = express.Router();
const categoryClient = require('../dbClients/categoriesDB');
const articleClient = require('../dbClients/articlesDB')
const categoryDB = require("../dbClients/categoriesDB");


router.get("/", function (req, res, next) {
  res.send('admin');
});

router.get('/categories', function (req, res, next) {
  const callback = (error, category) => {
     res.render("admin-list-categories",{
      category
     }) 
    }
  categoryDB.listCategory(callback);
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
  categoryClient.addCategory(query, callback);
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
    articleClient.addNewArticle(query, callBack)
})

module.exports = router;



