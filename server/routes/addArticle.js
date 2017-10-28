const express = require('express');
const router = express.Router();
const addarticle=require('../dbClients/articlesDB')


router.get('/', (req, res, next) =>{
  res.render('add-articles');
});


router.post('/',(req,res)=>{
   const query=req.body;
   const callBack=(data)=>{
     res.redirect('/')
    res.end();
  }
  addarticle(query,callBack)  
})
 
module.exports = router;


