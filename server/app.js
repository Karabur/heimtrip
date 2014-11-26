'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var errorHandler = require('errorhandler');

var routes = require('./routes');

var root = path.resolve('./');
var publicRoot = path.join(root, 'client');
var port = process.env.PORT || 5000;

var app = express();
var server = require('http').createServer(app);

app.set('views', publicRoot + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.use(require('less-middleware')(publicRoot));
app.use(express.static(publicRoot));
app.use(errorHandler());


console.log('App listening on port ', port);
app.listen(port);
