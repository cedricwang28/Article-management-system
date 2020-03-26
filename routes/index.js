var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var username = req.session.username
  res.render('index', {username: username});
});

router.get('/register', function(req, res, next) {
  res.render('register', {});
});

router.get('/login', function(req, res, next) {
  res.render('login', {})
})

module.exports = router;
