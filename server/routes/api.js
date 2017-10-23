var express = require('express');
var router = express.Router();

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

module.exports = router;