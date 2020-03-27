let express = require('express');
let router = express.Router();
let Model = require('../model.js');
let LoginCheck = Model.LoginCheck
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// register
router.post('/register', function(req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password,
    // password2: req.body.password2
  }

  LoginCheck.create(data).then((data)=>{
    
    res.redirect('/login')
  });   


})


router.post('/login', function(req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password
  }
  // model.connect(function(db) {
  //   db.collection('users').find(data).toArray(function(err, docs) {
  //     if (err) {
  //       res.redirect('/login')
  //     }else {
  //       if (docs.length > 0) {
         
  //         req.session.username = data.username
  //         res.redirect('/')
  //       } else {
  //         res.redirect('/login')
  //       }
  //     }
  //   })
  // })

  LoginCheck.find(data).then((v)=>{
    if(v.length>0){
      req.session.username = data.username
      res.redirect('/')
    }else{
      res.redirect('/login')
      
    }
  });

})


router.get('/logout', function(req, res, next) {
  req.session.username = null
  res.redirect('/login')
})

module.exports = router;
