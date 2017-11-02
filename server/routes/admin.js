const express = require('express');
const router = express.Router();
const categoryClient = require('../dbClients/categoriesDB');
const articleClient = require('../dbClients/articlesDB')
const ObjectId = require('mongodb').ObjectID;
 

router.get("/", function (req, res, next) {
  res.send('admin');
});

router.get('/articles', function (req, res, next) {
  const callback = (error, articles) => {
    res.render("admin-list-articles", {
      articles: articles
    })
  }
  articleClient.findArticles({}, callback);
});

router.get('/articles/edit/:articleId', (req, res) => {
  let articleId = req.params.articleId;
  const callback = (error, article) => {
    res.render("admin-edit-article", {
      article: article
    })
  }
  articleClient.findArticleById(articleId, callback);
})

router.post('/articles/edit/:articleId', function (req, res, next) {
  let articleId = req.params.articleId;
  const query = req.body;

  const callback = (error, article) => {
    res.redirect('/')
  }
  articleClient.editArticle(articleId, query, true, callback);
});

router.get('/articles/add', (req, res, next) => {
  res.render('admin-add-article');
});

router.post('/articles/add', (req, res) => {
  const query = req.body;
  const callBack = (data) => {
    res.redirect('/')
  }
  articleClient.addArticle(query, callBack)
})

router.get('/categories', function (req, res, next) {
  const callback = (error, category) => {
    res.render("admin-list-categories", {
      category
    })
  }
  categoryClient.findCategories({}, callback);
});
router.get("/categories/add", function (req, res, next) {
  res.render('admin-add-category');
});

router.post('/categories/add', function (req, res, next) {
  const query = req.body;
  const callback = () => {
    res.redirect("/");
  }
  categoryClient.addCategory(query, callback);
});

router.get('/categories/edit/:categoryId', (req, res) => {
  let categoryId = req.params.categoryId;
  const callback = (error, category) => {
    res.render("admin-edit-category", {
      category: category
    })
  }
  categoryClient.findCategoryById(categoryId, callback);
})

router.post('/categories/edit/:categoryId', function (req, res, next) {
  let categoryId = req.params.categoryId;
  const query = req.body;

  const callback = (error, category) => {
    res.redirect('/')
  }

  categoryClient.editCategory(categoryId, query, true, callback);

});

module.exports = router;