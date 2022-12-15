// const mongoose = require('mongoose');
// mongoose.set("strictQuery", false);

// const mongoURI="mongodb://localhost:27017/backdata"


// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected to mongo success")
//     })
// }
// module.exports =connectToMongo
const { MongoClient }= require("mongodb");
let dbConnection;

module.exports ={
    connectToDb : (cb)=>{
        MongoClient.connect("mongodb://localhost:27017/backdata")
        .then((client)=>{
            console.log("connected to mongo")
            dbConnection =client.db();
            return cb();

        })
        .catch((err)=>{
            return cb(err);
        });
    },
    getDb : () => dbConnection
}