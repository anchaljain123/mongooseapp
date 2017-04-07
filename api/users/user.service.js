
var connectionOne = require('./../../config/data');
var User = require('./user.model');
var connectionTwo = require('./../../config/dataSource');
var copyUser = require('./user.model1');
/*var User = require('./user.model');
var copyUser = require('./user.model1');*/


exports.insertDocuments = function (userData) {

    var counter = 0;
    for(i in userData) {

        User.create(userData[i], function (err, data) {
            if (err) {
                console.log({msg: "Something went wrong in post :", error: err});
            }
            else {
                counter++;
                console.log('counter-->',counter)
                if (counter === 3) {
                    exports.copy()
                }
                console.log("Successfully Inserted Data:",data );
            }
        })

    }

};

exports.copy = function () {
    var resultDocuments;
    User.find({},function (err, data) {
        if(err){
            console.log({msg: "Something went wrong",error: err});
        }
        else{
            resultDocuments = data;

            for(i in resultDocuments) {

                var obj = new copyUser(resultDocuments[i])

                obj.save(function (err) {
                    if (err) console.log(err)
                    console.log('done')
                })

                // copyUser.create(resultDocuments[i], function (err, data) {
                //     if (err) {
                //         console.log({msg: "Something went wrong in copying :", error: err});
                //     }
                //     else {
                //         console.log("Successfully Copy Data:",data );
                //     }
                // })
            }
        }

    });

}





