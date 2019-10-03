var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/posts', function(req, res) {
  res.json({status: 'OK', data: db.all()});
})

router.post('/posts', express.json({}), function(req, res) {
  db.add(req.body)
  res.json({
    status: 'OK', 
    data: db.one(db.count()-1)
  })
})

router.get('/posts/:key', function(req, res) {
  res.json({
    status: 'OK',
    data: db.search(p => p.title.toLowerCase().split(' ').join('-') === req.params.key)})
})

router.put('/posts/:id', express.json({}), function(req, res) {
  // console.log('PUT Data: ', req.params.id, req.body)
  db.update(req.params.id,req.body)
  // res.json({ok: false, error: "I don't like these things"})
  res.json({status: "OK"})
})

module.exports = router;
