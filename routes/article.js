let express = require('express');
let router = express.Router();
let Model = require('../model.js');
let Article = Model.Article

router.post('/add',function(req,res,next){
    let data = {
      title: req.body.title,
      content: req.body.content,
      username: req.session.username,
      id: Date.now()
    }

    Article.create(data).then((data)=>{
    
        res.redirect('/')
    });   

})



module.exports = router;