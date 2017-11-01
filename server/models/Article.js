const mongoose = require('mongoose');
const CategoryModel = require('../models/Category');
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    fullContent: String,
    categoryId: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: CategoryModel
        }
    }]
});

const Article = mongoose.model('articles', schema);

module.exports = Article;
