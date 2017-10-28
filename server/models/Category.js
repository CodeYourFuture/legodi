const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const addCategorySchema = new Schema({
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

const AddCategory = mongoose.model('addCategories', addCategorySchema);

module.exports = AddCategory;