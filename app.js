require('./config/data');
require('./config/dataSource');

var express = require('express');
var app = express();
var controller= require('./api/users/user.controller');
controller.insertDocuments();




