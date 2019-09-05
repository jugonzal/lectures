var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/articles', function(req, res) {
  res.json({status: "Ok", data: db.all()});
})

router.post('/articles', express.json({}), function(req, res) {
  db.add(req.body)
  res.json({status: "Ok"})
})

router.get('/articles/:key', function(req, res) {
  res.json({
    status: "Ok", 
    data: db.search(function(elem) {
      return elem.title.toLowerCase().split(' ').join('-') === req.params.key
    })
  })
})

router.put('/articles/:id', express.json({}), function(req, res) {
  // console.log('PUT Data: ', req.params.id, req.body)
  db.update(req.params.id,req.body)
  // res.json({ok: false, error: "I don't like these things"})
  res.json({status: "Ok"})
})


module.exports = router;
