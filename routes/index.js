let express = require('express');
let router = express.Router();
let Model = require('../model.js');
let Article = Model.Article;
let moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  let username = req.session.username
  

  Article.find().then((list)=>{
    list.map(function(item,index){
      item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss')
    })
    res.render('index',{username:username,list:list});
    
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
  res.render('write', {username: username})
})

module.exports = router;
