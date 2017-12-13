const express = require("express");
const router = express.Router();
const WeegieDB= require('../../../dbClients/weegieQuestionDB');

router.get('/add',(req,res)=>{
    res.render('admin-weegie-add-edit-question')
})

router.post('/add',(req,res)=>{

     query=req.body;
     let choices={};

     choices.a=query.a;
     choices.b=query.b;
     choices.c=query.c;
     choices.d=query.d;
     query.choices=choices;

     successfullCallback=()=>{
         res.redirect('/')
     }
     WeegieDB.addNewQuestion(query,successfullCallback)
    });

    router.get('/',(req,res)=>{
        callback=(err,weegieQuestions)=>{
            res.render('admin-list-weegie',{
                weegieQuestions:weegieQuestions
            })
        }
        WeegieDB.findQuestions({},callback);
    })


    router.get('/edit/:weegieId',(req,res)=>{
        const {weegieId}= req.params;

        callback=(err,weegieData)=>{
            res.render('admin-weegie-add-edit-question',{
                weegieData:weegieData
            })
        }
        WeegieDB.findSingleQuestion(weegieId,callback);
    })
    router.post('/edit/:weegieId',(req,res)=>{
        const {weegieId}= req.params;
        const query=req.body;
        let choices={};
   
        choices.a=query.a;
        choices.b=query.b;
        choices.c=query.c;
        choices.d=query.d;
        query.choices=choices;

        callback=(err,weegieData)=>{
            res.redirect('/admin/weegie');
        }
        WeegieDB.editQuestions(weegieId,query,callback)        
    }); 
    
    router.get('/delete/:weegieId',(req,res)=>{
        const {weegieId}= req.params;
        callback=()=>{
            res.redirect('/admin/weegie');
        }
        WeegieDB.removeQuestions(weegieId,callback);
    });
        
module.exports=router;