var mongoose = require('mongoose');
var connectionOne = require('./../../config/data');
var userSchema = new mongoose.Schema({
    grant_title:{
        type: String,
    },
    id:{
        type: Number,
    },
    total_amount:{
        type: String,
    }

});
console.log('user.model page -------');
module.exports = connectionOne.model('User', userSchema);

