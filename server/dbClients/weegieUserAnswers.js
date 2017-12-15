const WeegieUserAnswers= require("../models/weegieUserAnswer");

getAnswers=(query,callback)=>{
    WeegieUserAnswers.find(query,callback);
}  

createAnswers=(query)=>{
 WeegieUserAnswers.create(query);
}   


module.exports={getAnswers,createAnswers}