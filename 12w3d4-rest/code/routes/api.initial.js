var express = require('express');
var router = express.Router();
const db = require('../data');

router.get('/posts', function(req, res) {
  res.json({data: db.all()});
})

// router.put('/posts/:id', express.json({}), function(req, res) {
//   // console.log('PUT Data: ', req.params.id, req.body)
//   db.update(req.params.id,req.body)
//   // res.json({ok: false, error: "I don't like these things"})
//   res.json({ok: true})
// })

module.exports = router;
