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
    },
    language:{
        type:String,
        default:'en'
    },
    order:{
       type: Number,
       unique:false},
    writerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'writer'
    },
    writerName:String
       
       
});

const Article = mongoose.model('article', schema);

module.exports = Article;
