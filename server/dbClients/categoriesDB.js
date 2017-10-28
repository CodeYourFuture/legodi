const mongoose = require('mongoose');
const AddCategory = require('../models/Category');

const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
mongoose.Promise = global.Promise;

const saveCategory = (query, callback) => {
    mongoose.connect(mongoConnection);
    AddCategory.create(query).then(callback)
}

module.exports = saveCategory;


