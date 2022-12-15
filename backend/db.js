const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoURI="mongodb://localhost:27017/backdata"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo success")
    })
}
module.exports =connectToMongo