const WeegieQuestion = require("../models/WeegieQuestions");
const ObjectId = require('mongodb').ObjectID;

addNewQuestion=(query,callback)=>{
    WeegieQuestion.create(query,callback);
}
findSingleQuestion=(questionId,callback)=>{
    WeegieQuestion.findById(questionId,callback);
}
findQuestions=(query,callback)=>{
    WeegieQuestion.find(query,callback);
}
removeQuestions=(questionId,callback)=>{
    WeegieQuestion.remove({ "_id": ObjectId(questionId) },callback);
}
editQuestions=(questionId,query,callback)=>{
    WeegieQuestion.update({ "_id": ObjectId(questionId) },query,{upsert:true},callback);
}




module.exports={addNewQuestion,findQuestions,removeQuestions,editQuestions,findSingleQuestion};