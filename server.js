'use strict'

var express = require('express');
var bp = require('body-parser');
var app = express();
var path = require('path');
var root = __dirname;
var port = process.env.PORT || 8000;


app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

var mongoose = require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js')(app);


app.listen(port, console.log("Listening on Port :", port));