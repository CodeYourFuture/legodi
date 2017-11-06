require('./connection')
const mongoose = require('mongoose');
const CategoryModel = require('../models/Category');
const ObjectId = require('mongodb').ObjectID;
 
const addCategory = (query, callback) => {
    CategoryModel.create(query).then(callback);
}

const findCategories = (query, callback) => {
    CategoryModel.find(query, callback)
}
const findCategoryById = (id, callback) => {
    CategoryModel.findById(id).exec(callback)
}

const editCategory = (CategoryId, query, upsertOption, sucessCallBack) => {
    CategoryModel.update({"_id":ObjectId(CategoryId)}, query,{upsert:upsertOption}, sucessCallBack);
};

module.exports = {
    addCategory,
    findCategories,
    editCategory,
    findCategoryById
};