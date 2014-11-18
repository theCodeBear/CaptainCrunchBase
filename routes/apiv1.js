var express = require('express');
var router = express.Router();
var crunchbase = require('crunchbase2');
crunchbase.init(process.env.CB_API_KEY);

router.get('/', function(req, res) {
  res.send("Crunchbase API local wrapper");
});

router.get('/organizations', function(req, res) {
  // req.query: { query: "sdafs", name: "asdfsad" }
  crunchbase.organizations( req.query , function(error, results) {
    res.json(results.data.items);
  });
});

module.exports = router;
