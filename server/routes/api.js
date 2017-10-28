var express = require('express');
var router = express.Router();
const addArticle = require('../dbClients/articlesDB')

/* GET Articles page. */
router.get('/articles', function (req, res, next) {
    const callBack = (error, articles) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    addArticle.listArticles(callBack)
});

module.exports = router;