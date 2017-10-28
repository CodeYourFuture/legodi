var express = require('express');
var router = express.Router();
const categoryClient = require("../dbClients/categoriesDB");
const articleDB = require('../dbClients/articlesDB')

/* GET Articles page. */
router.get('/articles', function (req, res, next) {
    const callBack = (error, articles) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    articleDB.listArticles(callBack)
});

router.get('/categories', function (req, res, next) {
    const callback = (error, data) => { res.json(data) }
    categoryClient.listCategory(callback);
});

module.exports = router;