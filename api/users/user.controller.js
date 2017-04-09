var userService = require('./user.service');
var fs=require('fs');
var filename = require("./../../userData.json");
/*
exports.createUser = function(req,res,next) {
    var userData = req.body.data;
    userService.createUser(userData,res);
};
exports.updateUser = function(req,res,next) {
    var userName = req.params.userName;
    userService.updateUser(userName,res);
};

exports.getUser = function(req,res,next) {
    var userName = req.query;
    userService.getUser(userName,res);
};

exports.deleteUser = function(req,res,next) {
    var userName = req.params.userName;
    userService.deleteUser(userName,res);
};*/
exports.insertDocuments = function(req,res) {
    var obj = JSON.parse(fs.readFileSync('userData.json', 'utf8'));
    userService.insertDocuments(obj,res);
};


