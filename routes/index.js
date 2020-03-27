let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let username = req.session.username
  res.render('index', {username: username});
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
