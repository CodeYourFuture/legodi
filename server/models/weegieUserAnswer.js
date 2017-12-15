const mongoose = require('mongoose');
const { Schema } = mongoose;

const weegieAnswerSchema = new Schema({
    title:String,
    answer:String
});

const WeegieAnswer = mongoose.model('weegieanswer',weegieAnswerSchema);

module.exports=WeegieAnswer;