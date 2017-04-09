
var connectionOne = require('./../../config/data');
insertDb = connectionOne.model('User');
var User = require('./user.model');
var connectionTwo = require('./../../config/dataSource');
copyDb = connectionTwo.model('copyUser');
var copyUser = require('./user.model1');

exports.insertDocuments = function (userData) {
    var counter = 0;
    for(i in userData) {
        insertDb.create(userData[i], function (err, data) {
            if (err) {
                console.log({msg: "Something went wrong in post :", error: err});
            }
            else {
                counter++;
                if (counter === 3) {
                  copy()
                }
                console.log("Successfully Inserted Data:",data );
            }
        })

    }

}


  function copy () {
    var resultDocuments;
    insertDb.find({},function (err, data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            resultDocuments = data;
            for(i in resultDocuments) {
                var obj = {
                    "grant_title": resultDocuments[i].grant_title,
                    "id": resultDocuments[i].id,
                    "total_amount": resultDocuments[i].total_amount,
                }
                copyDb.create(obj, function (err, data) {
                    if (err) {
                        console.log({msg: "Something went wrong in copying :", error: err});
                    }
                    else {
                        console.log("Successfully Copy Data:");
                    }
                })
            }
        }

    });

}







