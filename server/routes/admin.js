const express = require('express');
const router = express.Router();
const categoryClient = require('../dbClients/categoriesDB');
const articleClient = require('../dbClients/articlesDB')
const ObjectId = require('mongodb').ObjectID;

router.get("/", function (req, res, next) {
  res.send('admin');
});

router.get('/categories', function (req, res, next) {
  const callback = (error, category) => {
    res.render("admin-list-categories", {
      category
    })
  }
  categoryClient.findCategories({},callback);
});

router.get('/articles', function (req, res, next) {
  const callback = (error, articles) => {
    res.render("admin-list-articles", {
      articles: articles
    })
  }
  articleClient.findArticles({}, callback);
});
 
router.get('/categories/edit/:categoryId', (req, res) => {
  let categoryId = req.params.categoryId;
  const callback = (error, category) => {
    res.render("admin-edit-category", {
      category: category[0]
    })
  }
  categoryClient.findCategories({ "_id": ObjectId(categoryId) }, callback);
})
router.post('/categories/edit/:categoryId', function (req, res, next) {
  let categoryId = req.params.categoryId;
  const query = req.body;
  console.log(query)
  
  const callback = (error, category) => {
// we use find articles function to show us list of all articles after update
    const callbacktwo = (error, category) => {
      res.render("admin-list-categories", {
        category: category
      })
    }
    categoryClient.findCategories({}, callbacktwo);
  }
  categoryClient.editCategory({ "_id": ObjectId(categoryId) }, query, true, callback);

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



