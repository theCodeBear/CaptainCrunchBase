var express = require('express');
var router = express.Router();
var crunchbase = require('crunchbase2');
crunchbase.init(process.env.CB_API_KEY);

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOHQ_URL);
var CompanySchema = new mongoose.Schema({}, { strict: false });
var CompanyModel = mongoose.model("Company", CompanySchema);

router.get('/', function(req, res) {
  res.send("Crunchbase API local wrapper");
});

router.get('/organizations', function(req, res) {
  crunchbase.organizations( req.query , function(error, results) {
    res.json(results.data.items);
  });
});

router.get('/organization/:permalink', function(req, res) {
  crunchbase.organization( req.params.permalink , function(error, results) {
    var company = new CompanyModel(results);
    company.save();

    res.json(results);
  });
});

module.exports = router;
