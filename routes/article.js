let express = require('express');
let router = express.Router();
let Model = require('../model.js');
let Article = Model.Article

router.post('/add',function(req,res,next){
  let id = parseInt(req.body.id)
  if(id){
    let page = req.body.page
    let title = req.body.title
    let content = req.body.content
    Article.updateOne({id:id}, {$set:{
      title:title,
      content:content
    }},function(err,ret){
      res.redirect('/?page='+page)
    })
  }else{
    let data = {
      title: req.body.title,
      content: req.body.content,
      username: req.session.username,
      id: Date.now()
    }

    Article.create(data).then((data)=>{
    
        res.redirect('/')
    });   
  }
    

})


router.get('/delete',function(req,res,next){
  let id = parseInt(req.query.id)
  let page = req.query.page;
  Article.deleteOne({id:id}).then((data)=>{
    res.redirect('/?page='+page);
  });
})


module.exports = router;
