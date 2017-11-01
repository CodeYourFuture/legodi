const mongoose = require('mongoose');
const CategoryModel = require('../models/Category');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/legodi';
mongoose.Promise = global.Promise;
const ObjectId = require('mongodb').ObjectID;

const addCategory = (query, callback) => {
    mongoose.connect(mongoConnection);
    CategoryModel.create(query).then(callback)
}

const findCategories = (query, callback) => {
    mongoose.connect(mongoConnection);
    CategoryModel.find(query, callback)
}
const findCategoryById = (id, callback) => {
    mongoose.connect(mongoConnection);
    CategoryModel.findById(id).exec(callback)
}

const editCategory = (oldCategory, query, upsertOption, sucessCallBack) => {
    mongoose.connect(mongoConnection);
    CategoryModel.update({"_id":ObjectId(oldCategory)}, query,{upsert:upsertOption}, sucessCallBack);
};

module.exports = {
    addCategory,
    findCategories,
    editCategory,
    findCategoryById
};



