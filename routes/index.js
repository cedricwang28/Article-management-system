let express = require('express');
let router = express.Router();
let Model = require('../model.js');
let Article = Model.Article;
let moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  let username = req.session.username || ''
  let page = req.query.page || 1
  let data = {
    total:0,
    curPage:page,
    list:[]
  }
  let pageSize = 2;

  Article.find().then((list)=>{
    data.total = Math.ceil(list.length/pageSize);
    data.list = list;

    list.map(function(item,index){
      item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss')
    })

    Article.find().sort({_id:-1}).limit(pageSize).skip((page-1)*pageSize).then((list2)=>{
      if(list2.length == 0){
        res.redirect('/?page='+((page-1)||1))
      }else{
        list2.map(function(item,index){
          item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss')
        })
        data.list = list2;
      }
      
      res.render('index',{username:username,data:data});
    })

    
    
  })
});

router.get('/register', function(req, res, next) {
  res.render('register', {});
});

router.get('/login', function(req, res, next) {
  res.render('login', {})
})

router.get('/write', function(req, res, next) {
  let username = req.session.username
  let id = parseInt(req.query.id)
  let page = req.query.page
  
  console.log(id,'sdfasfd');
  
  let item = {
    title:'',
    content: ''
  }
  if(id){ 
    Article.findOne({id:id},function(err,item){
      item['page'] = page
      res.render('write', {username: username, item:item})
    })
  }else{
    res.render('write', {username: username, item:item})
  }
  

  
})

module.exports = router;
