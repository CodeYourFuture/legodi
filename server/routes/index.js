const express = require('express');
const router = express.Router();
const articleClient = require('../dbClients/articlesDB')

ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}

// Get Homepage
router.get('/', ensureAuthenticated, (req, res, next) => {
    const callback = (error, articles) => {
        res.render("index", {
            articles: articles
        })
    }
    articleClient.findArticles({}, callback);
});

module.exports = router;