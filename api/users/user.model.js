var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  /* userName: {
       type: String,
       required: true,
   },
   emailid: {
       type: Number,
    }*/
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
module.exports = mongoose.model('User',userSchema); //creating Users collection