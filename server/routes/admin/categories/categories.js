var express = require('express');
var router = express.Router();
const categoryClient = require('../../../dbClients/categoriesDB');
const articleClient = require('../../../dbClients/articlesDB')
const ObjectId = require('mongodb').ObjectID;


router.get('/', function (req, res, next) {
    const callback = (error, category) => {
        res.render("admin-list-categories", {
            category
        })
    }
    categoryClient.findCategories({}, callback);
});

router.get("/add", function (req, res, next) {
    res.render('admin-add-category');
});

router.post('/add', function (req, res, next) {
    const query = req.body;
    const callback = () => {
        res.redirect("/");
    }
    categoryClient.addCategory(query, callback);
});

router.get('/edit/:categoryId', (req, res) => {
    const {categoryId} = req.params;
    const callback = (error, category) => {
        res.render("admin-edit-category", {
            category: category
        })
    }
    categoryClient.findCategoryById(categoryId, callback);
});

router.post('/edit/:categoryId', function (req, res, next) {
    const {categoryId} = req.params;
    const query = req.body;

    const callback = (error, category) => {
        res.redirect('/')
    }

    categoryClient.editCategory(categoryId, query, true, callback);
});

module.exports = router;