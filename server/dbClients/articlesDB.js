const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
const Article = require('../models/Article');
const mongoose = require('mongoose')
mongoose.Promise=global.Promise;

 const addNewArticle = (query, callback) => {
    mongoose.connect(mongoConnection);
    Article.create(query).then(callback)
};

const listArticles = (sucessCallBack) => {
    mongoose.connect(mongoConnection);
    Article.find({}).populate('category').exec(sucessCallBack);
};
 
module.exports = {addNewArticle,listArticles};
 
 