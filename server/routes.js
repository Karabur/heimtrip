'use strict';

var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.render('index');
});

router.get('/views/*', function (req, res) {
  res.status(404).send('Not found');
});

module.exports = router;
