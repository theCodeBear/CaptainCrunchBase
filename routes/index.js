var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Captain Crunchbase | CodingHouse' });
});

module.exports = router;
