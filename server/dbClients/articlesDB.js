const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
const Article = require('../models/Article');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const ObjectId = require('mongodb').ObjectID;
mongoose.connect(mongoConnection);

const addArticle = (query, callback) => {
    Article.create(query).then(callback)
};
const findArticles = (query, sucessCallBack) => {
    Article.find(query, sucessCallBack);
};
const findArticleById = (id, callback) => {
    Article.findById(id).exec(callback)
};

const editArticle = (articleId, query, upsertOption, sucessCallBack) => {
    Article.update({ "_id": ObjectId(articleId) }, query, { upsert: upsertOption }, sucessCallBack);
};

module.exports = {
    addArticle,
    findArticles,
    findArticleById,
    editArticle
};

