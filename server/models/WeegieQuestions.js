const mongoose = require('mongoose');
const { Schema } = mongoose;

const weegieSchema = new Schema({
    title:String,
    choices:{
        a:String,
        b:String,
        c:String,
        d:String
    },
    answer:String,
    visible:{
        type:Boolean,
        default:true
    }
});

const Weegie = mongoose.model('weegideQuestions',weegieSchema);

module.exports=Weegie;