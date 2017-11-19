const mongoose = require('mongoose');
const CategoryModel = require('../models/Category');
const { Schema } = mongoose;

const schema = new Schema({
    title: String,
    fullContent: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    visible: {
        type: Boolean,
        default: true,
    }
});

const Article = mongoose.model('article', schema);

module.exports = Article;
