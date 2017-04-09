var User = require('./user.model');
var copyUser = require('./user.model1');
console.log('user.service page---------');
/*exports.getUser = function(res) {

    User.find({},function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            res.send({user:data});


        }

    })

};*/
// exports.createUser = function(userData,res) {
//     User.create(userData , function (err,data) {
//         if(err){
//             console.log({msg: "Somwthing went wrong in post ",error: err});
//         }
//         else{
//             console.log(" Success ");
//             res.send({result : data});
//         }
//
//     })
//
// };
// exports.getUser = function(userName,res) {
//     User.findOne(userName,function (err,data) {
//         if(err){
//             console.log({msg: "Something went wrong",error: err});
//         }
//         else{
//
//             res.send({'msg':'found',user:data})
//         }
//
//     })
//
// };
//
// exports.updateUser = function(userName,res) {
//     User.update(userName,{userName:'pooja'},function (err,data) {
//         if(err){
//             console.log({msg: "Something went wrong",error: err});
//         }
//         else{
//         res.send({'msg':'found',user:data})
//         }
//
//     })
//
// };
//
// exports.deleteUser = function(userName,res) {
//     User.deleteOne(userName,function (err,data) {
//         if(err){
//             console.log({msg: "Something went wrong",error: err});
//         }
//         else{
//             res.send({'msg':'found',user:data})
//         }
//
//     })
//
// };
exports.insertDocuments = function(userData,res) {
    for(i in userData) {
      User.create(userData[i], function (err, data) {
            if (err) {
                console.log({msg: "Something went wrong in post :", error: err});
            }
            else {
                console.log("Successfully Inserted Data:",data );
            }
        })
    }

    copyDocuments();
};

function copyDocuments() {

    var resultDocuments;
    User.find({},function (err,data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
             resultDocuments = data;

        }

    });
    for(i in resultDocuments) {
        copyUser.create(resultDocuments[i], function (err, data) {
            if (err) {
                console.log({msg: "Something went wrong in copying :", error: err});
            }
            else {
                console.log("Successfully Copy Data:",data );
            }
        })
    }

}


