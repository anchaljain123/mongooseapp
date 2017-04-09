require('./config/data');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
//require('./config/route')(app);
var controller= require('./api/users/user.controller');
controller.insertDocuments();

/*
app.listen(3000,function () {
    console.log('Listening to server @http://localhost:3000');
});*/
