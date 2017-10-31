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


router.get("/categories/edit/:id", function (req, res, next) {
  // Query database for req.param('id') item
  // replace values below
  var categoryObj = {
    id:req.param('id'),
    title:"title",
    description:"description",
    shortDescription:"shortDescription"
  } 
  res.render('category', categoryObj);
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



