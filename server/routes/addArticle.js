const express = require('express');
const router = express.Router();
const addarticle=require('../dbClients/articlesDB')

router.get('/add/article', (req, res, next) =>{
  res.render('add-articles');
});


router.post('/add/addarticle',(req,res)=>{
   const query=req.body;
   const callBack=(data)=>{
     res.redirect('/')
    res.end();
  }
  addarticle(query,callBack)  
})
 
module.exports = router;


