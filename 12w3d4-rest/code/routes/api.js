var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/posts', function(req, res) {
  res.json({ok: true, data: db.all()});
})

router.get('/posts/:id', function(req, res) {
  res.json({ok: true, data: db.one(req.params.id)});
})

router.put('/posts/:id', express.json({}), function(req, res) {
  // console.log('PUT Data: ', req.params.id, req.body)
  db.update(req.params.id,req.body)
  // res.json({ok: false, error: "I don't like these things"})
  res.json({ok: true})
})

router.post('/posts', express.json({}), function(req, res) {
  console.log('JSON:',req.body)
  db.add(req.body)
  res.json({ok: true, data: req.body})
});

module.exports = router;
