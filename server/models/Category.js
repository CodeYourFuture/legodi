const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create CategorModel Schema & model
const CategorySchema = new Schema({
    title: {
        type: String,
    }, 
    titleTranslation:{
        ar:{type:String,default:'amharic translation'},
        am:{type:String,default:'arabic translation'}
    },
    description: {
        type: String
    },
    shortDescription: {
        type: String
    },
    visible: {
        type: Boolean,
        default: true,
    },
    icon: {
        type: String,
        default :"default-icon"
    },
    order:Number
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;