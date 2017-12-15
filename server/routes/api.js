const express = require('express');
const router = express.Router();
const categoryClient = require("../dbClients/categoriesDB");
const articleClient = require('../dbClients/articlesDB')
const ObjectId = require('mongodb').ObjectID;
const WeegieDB= require('./../dbClients/weegieQuestionDB')
const weegieUserAnswer= require('./../dbClients/weegieUserAnswers');

/* GET Articles page. */

router.get('/articles', function (req, res, next) {
    const callBack = (error, articles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    const { language = "en" } = req.query;

    articleClient.findArticles({ visible: true, language: language }, callBack)


});
router.get('/weegie/user/answer',(req,res)=>{
    callback=(error,data)=>{
        if (error) {
            console.error(error)
            res.sendStatus(500);
        }else{
            res.json(data);            
        }
    }
    weegieUserAnswer.getAnswers({},callback);
})
  router.post('/weegie/user/answer',(req,res)=>{
    
    let query = req.body;
    
   mapQuery=()=>{
    var msg="old";
    
    query.map((x)=>{
        
                  successfullCallback=(err,question)=>{
                      msg="new"; 
                  };
                  WeegieDB.findSingleQuestion(x.title,successfullCallback);   
              })
              console.log(msg);
   }
   
   mapQuery();
        
 //  weegieUserAnswer.createAnswers(query);
 })
/* GET Single Articles */
router.get('/articles/:articleId', function (req, res, next) {
    const articleId = req.params.articleId;
    const callBack = (error, singleArticles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(singleArticles)
        }
    };
    articleClient.findArticleById(articleId, callBack);

});
router.get('/categories', function (req, res, next) {
    const callback = (error, data) => { res.json(data) }
    categoryClient.findCategories({ visible: true }, callback);
});

/* GET Single Category's articles */
router.get('/categories/:categoryId', function (req, res, next) {
    const categoryId = req.params.categoryId;
    const callBack = (error, articles) => {
        if (error) {
            console.error(error)
            res.sendStatus(500);
        } else {
            res.json(articles)
        }
    };
    const { language = "en" } = req.query;
    
    articleClient.findArticles({ category: categoryId, 'visible': true, language: language }, callBack)
});

router.get('/weegie',(req,res)=>{

    callback=(error,question)=>{

         shuffle=(array)=> {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return  res.json(question);
          }

          shuffle(question)
       
    }

    WeegieDB.findQuestions({},callback);
})
module.exports = router;