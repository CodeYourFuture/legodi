const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
const addArticle = require('../models/Article');
const mongoose = require('mongoose')
mongoose.Promise=global.Promise;

 const addNewArticle = (query, callback) => {
    mongoose.connect(mongoConnection);
    addArticle.create(query).then(callback)
};
 
module.exports = addNewArticle;
 
 