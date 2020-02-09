var express = require('express');
var router = express.Router();

//app.use('/blog', blogRouter);

router.get('/01HotProgrammingin2020', function(req, res, next) {
  res.render('Blog/01HotProgrammingin2020', {
    layout: 'page_layout/Blog_layout'
  });
});

router.get('/02', function(req, res, next) {
  res.render('Blog/02');
});

router.get('/03', function(req, res, next) {
  res.render('Blog/03');
});

router.get('/04', function(req, res, next) {
  res.render('Blog/04');
});

router.get('/05', function(req, res, next) {
  res.render('Blog/05');
});

router.get('/06', function(req, res, next) {
  res.render('Blog/06');
});

module.exports = router;
