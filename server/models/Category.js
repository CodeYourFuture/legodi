const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create CategorModel Schema & model
const CategorySchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    shortDescription: {
        type: String
    }
});

const CategoryModel = mongoose.model('category', CategorySchema);

module.exports = CategoryModel;