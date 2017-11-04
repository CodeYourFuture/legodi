require('./connection')
const Article = require('../models/Article');
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;
 
const addArticle = (query, callback) => {
     Article.create(query).then(callback)
};

const findArticles = (query, sucessCallBack) => {
    Article.find(query).populate('category').exec(sucessCallBack);    
};

const findArticleById = (id, callback) => {
     Article.findById(id).exec(callback)
};

const editArticle = (articleId, query, upsertOption, sucessCallBack) => {
     Article.update({"_id":ObjectId(articleId)}, query,{upsert:upsertOption}, sucessCallBack);
};

module.exports = {
    addArticle,
    findArticles,
    findArticleById,
    editArticle
};