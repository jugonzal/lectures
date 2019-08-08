var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/articles', function(req, res) {
  res.json({ok:true, articles: db.all().map(article => "/api2/articles/"+article.title.toLowerCase().split(' ').join('-'))});
})

router.post('/articles', express.json({}), function(req, res) {
  console.log('POST data: ', req.body)
  db.add(req.body)
  res.json({ok:true, article: db.all()[db.count()-1]})
})

router.get('/articles/:id', function(req,res) {
  res.json({ok:true, article: db.search(article => req.params.id === article.title.toLowerCase().split(' ').join('-') )[0]})
})

router.put('/articles/:id', express.json({}), function(req, res) {
  console.log('PUT Data: ', req.params.id, req.body)
  db.update(req.params.id,req.body)
  // res.json({ok: false, error: "I don't like these things"})
  res.json({ok: true})
})

module.exports = router;
