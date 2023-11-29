const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// lets connect
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connected to mongo db successfully 🤩")
})
db.on('error',(e)=>{
    console.log("Mongo DB Error : "+e);
})
db.on('close',()=>{
    console.log("Connection to mongo db ended!")
})

module.exports=db;