const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create CategorModel Schema & model
const CategorySchema = new Schema({
    title: {
        type: String,
    }, 
    titleTranslation:{
        arabic:String,
        amarigna:String
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
    }
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;