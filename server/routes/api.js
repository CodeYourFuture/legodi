var express = require('express');
var router = express.Router();
const categoryClient = require("../dbClients/categoriesDB");
const articleClient = require('../dbClients/articlesDB')

/* GET Articles page. */
router.get('/articles', function (req, res, next) {
    const callBack = (error, articles) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    articleClient.findArticles(callBack)
});

router.get('/categories', function (req, res, next) {
    const callback = (error, data) => { res.json(data) }
    categoryClient.findCategories(callback);
});

module.exports = router;