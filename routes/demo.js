var express = require('express');
var router = express.Router();

//app.use('/blog', blogRouter);

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('Index/contact');
});

router.get('/01', function(req, res, next) {
  res.render('Index/contact');
});

router.get('/02', function(req, res, next) {
  res.render('Index/contact');
});

module.exports = router;
