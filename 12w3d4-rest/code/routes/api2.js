var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/articles', function(req, res) {
  res.json({ok:true, articles: db.all()});
})

router.post('/articles', express.json({}), function(req, res) {
  db.add(req.body)
  res.json({ok:true, article: db.all()[db.count()-1]})
})

router.get('/articles/:id', function(req,res) {
  res.json({ok:true, article: db.search(article => req.params.id === article.id )})
})

router.put('/articles/:id', express.json({}), function(req, res) {
  console.log('PUT Data: ', req.params.id, req.body)
  db.update(req.params.id,req.body)
  // res.json({ok: false, error: "I don't like these things"})
  res.json({ok: true, article: db.one(req.params.id)})
})

router.post('/articles/:id/comments', express.json(), function(req,res) {
  let article = db.one(req.params.id)
  console.log("Adding comments to ", article, req.body)
  if (article.comments) {
    article.comments.push(req.body)
  } else {
    article.comments = [req.body]
  }
  db.update(req.params.id, article)
  res.json({ok: true, article: db.one(req.params.id)})
})

module.exports = router;
