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
    articleImage:{
        type: String
    },
    visible: {
        type: Boolean,
        default: true,
    },
    language:{
        type:String,
        default:'en'
    },
    Status: {
        type: String,
        default: "Approved"
    },
    order:{
       type: Number,
       unique:false}
       
       
});

const Article = mongoose.model('article', schema);

module.exports = Article;
