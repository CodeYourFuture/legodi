var express = require('express');
var router = express.Router();
const categoryClient = require('../../../dbClients/categoriesDB');
const articleClient = require('../../../dbClients/articlesDB');

router.get('/', function (req, res, next) {
    const callback = (error, articles) => {
        res.render("admin-list-articles", {
            articles: articles
        })
    }
    articleClient.findArticles({}, callback);
});

router.get('/add', (req, res, next) => {
    const callback = (error, categories) => {
        res.render('admin-add-article', {
            categories
        })
    }
    categoryClient.findCategories(callback);
});

router.post('/add', (req, res) => {
    const query = req.body;
    const callBack = (data) => {
        res.redirect('/')
    }
    articleClient.addArticle(query, callBack)
});






router.get('/edit/:articleId', (req, res) => {
    const {articleId} = req.params;
    const callback = (error, categories) => {
        callback2 = (error, article) => {
            res.render("admin-edit-article", {
                article: article,
                categories: categories
            });
        };
        articleClient.findArticleById(articleId, callback2);
    }
    categoryClient.findCategories(callback);
})








router.post('/edit/:articleId', function (req, res, next) {
    const {articleId} = req.params;
    const query = req.body;

    const callback = (error, article) => {
        res.redirect('/')
    }
    articleClient.editArticle(articleId, query, true, callback);
});

module.exports = router;