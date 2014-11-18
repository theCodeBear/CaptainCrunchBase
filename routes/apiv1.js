var express = require('express');
var router = express.Router();
var crunchbase = require('crunchbase2');
crunchbase.init(process.env.CB_API_KEY);

crunchbase.organizations( { query: "airbnb" } , function(error, results) {
  console.log(results.data.items[0]);
});

router.get('/', function(req, res) {
  res.send("Crunchbase API local wrapper");
});

router.get('/organizations', function(req, res) {
  // crunchbase.organizations( { query: "airbnb" } , function(error, results) {
  // });
});

module.exports = router;
