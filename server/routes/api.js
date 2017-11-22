const express = require('express');
const router = express.Router();
const categoryClient = require("../dbClients/categoriesDB");
const articleClient = require('../dbClients/articlesDB')
const ObjectId = require('mongodb').ObjectID;

/* GET Articles page. */
router.get('/articles', function (req, res, next) {
    const callBack = (error, articles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    articleClient.findArticles({ visible: true,language:"En" }, callBack)
});
/* GET Single Articles */
router.get('/articles/:articleId', function (req, res, next) {
    const articleId = req.params.articleId;
    const callBack = (error, singleArticles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(singleArticles)
        }
    };
    articleClient.findArticleById(articleId, callBack);

});
router.get('/categories', function (req, res, next) {
    const callback = (error, data) => { res.json(data) }
    categoryClient.findCategories({ visible: true }, callback);
});

/* GET Single Category's articles */
router.get('/categories/:categoryId', function (req, res, next) {
    const categoryId = req.params.categoryId;
    const callBack = (error, articles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    articleClient.findArticles({ category: categoryId, 'visible': true }, callBack)
});

module.exports = router;