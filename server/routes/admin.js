var express = require('express');
var router = express.Router();
const categoryClient = require('../dbClients/categoriesDB');
const articleClient = require('../dbClients/articlesDB')

router.get("/", function (req, res, next) {
  res.send('admin');
});

router.get('/categories', function (req, res, next) {
  const callback = (error, category) => {
     res.render("admin-list-categories",{
      category
     }) 
    }
    categoryClient.listCategory(callback);
});

router.get('/articles', function (req, res, next) {
  const callback = (error, articles) => {
     res.render("admin-list-articles",{
      articles:articles
     }) 
    }
    articleClient.listArticles(callback);
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
  categoryClint.categoryClint(query, callback);
});

/*===========================
        Add article
===========================*/
router.get('/articles/add', (req, res, next) => {
  const callback = (error, category) => {
    res.render('add-articles', {
      category
    })
  }
  categoryClient.listCategory(callback);
});

router.post('/articles/add', (req, res) => {
  const query = req.body;
  const callBack = (data) => {
    res.redirect('/')
    res.end();
  }
  articleClient.addNewArticle(query, callBack)
})

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



