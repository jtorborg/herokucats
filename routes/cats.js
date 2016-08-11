var express = require('express');

var router = express.Router();

module.exports = router;

var cats = [{name: 'Luna', trait: 'Fiesty'}];


router.post('/', function(req, res) {
  console.log('request: ', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});


router.get('/', function(req, res) {
  res.send(cats);
});
