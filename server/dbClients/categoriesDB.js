const mongoose = require('mongoose');
const CategoryModel = require('../models/Category');

const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
mongoose.Promise = global.Promise;

const addCategory = (query, callback) => {
    mongoose.connect(mongoConnection);
    CategoryModel.create(query).then(callback)
}

module.exports = {addCategory,addCategory};


