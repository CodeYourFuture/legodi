const express = require('express');
const router = express.Router();
const articleClient = require('../dbClients/articlesDB')

/* GET home page. */
 
router.get('/', function (req, res, next) {
  const callback = (error, articles) => {
     res.render("admin-list-articles",{
      articles:articles
     }) 
    }
    articleClient.findArticles({},callback);
});


module.exports = router;


