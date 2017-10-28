var express = require('express');
var router = express.Router();
const categoryClient = require("../dbClients/categoriesDB");

/* GET Articles page. */
router.get('/articles', function (req, res, next) {
    res.send(
        [
            {
                "title": "Article 1",
            }, {
                "title": "Article 2"
            }
        ]
    );
});

router.get('/categories', function (req, res, next) {
    const callback = (error, data) => { res.json(data) }
    categoryClient.listCategory(callback);
});

module.exports = router;