var express = require('express');
var router = express.Router();
const categoryClient = require('../../../dbClients/categoriesDB');
const articleClient = require('../../../dbClients/articlesDB');

router.get('/', (req, res, next) => {
    const callback = (error, articles) => {
        res.render("articles-list", {
            articles: articles,
            addArticle: 'true',
            articlehome: 'homeNav'

        })
    }
    articleClient.findArticles({}, callback);
});

router.get('/add', (req, res, next) => {
    const callback = (error, categories) => {
        res.render('admin-add-article', {
            categories,
            addArticlehome: 'homeNav'
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

router.get('/edit/:articleId', ensureAuthenticated, (req, res) => {

    const { articleId } = req.params;
    const categoriesCallback = (error, categories) => {
        articleCallback = (error, article) => {
            let CategorySelected = "";
            categories.map((category) => {
                if (article.category.equals(category._id)) {
                    CategorySelected = category.title;
                }
            })
            res.render("admin-edit-article", {
                article: article,
                categories: categories,
                CategorySelected: CategorySelected,
                editArticleHome: 'homeNav'
            });
        };
        articleClient.findArticleById(articleId, articleCallback);
    }
    categoryClient.findCategories(categoriesCallback);
})

router.post('/delete/:articleId', (req, res) => {
    const { articleId } = req.params;

    callBack = (error, data) => {
        if (data.title === req.body.validationTitle) {
            deleteCallBack = () => {
                res.redirect('/');

            }
            articleClient.removeArticle(articleId, deleteCallBack);

        } else {
            res.render("delete-title-wrong");
        }
    }
     articleClient.findArticleById(articleId, callBack)
})

router.post('/edit/:articleId', function (req, res, next) {
    const { articleId } = req.params;
    const query = req.body;
    console.log(query)
    const callback = (error, article) => {
        res.redirect('/')
    }
    articleClient.editArticle(articleId, query, true, callback);
});

module.exports = router;