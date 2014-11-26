'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var errorHandler = require('errorhandler');

var routes = require('./routes');

var root = path.resolve('./');
var publicPath = path.join(root, 'client');
var port = process.env.PORT || 5000;

var app = express();
var server = require('http').createServer(app);

app.set('views', root + '/server/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('less-middleware')(publicPath));
app.use(express.static(publicPath));
app.use(errorHandler()); // Error handler - has to be last

app.use('/', routes);

console.log('App listening on port ', port);
app.listen(port);
