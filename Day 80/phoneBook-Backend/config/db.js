const mongoose = require('mongoose');

const mongoURI= "mongodb+srv://esakkimuthu6842:muthu_123@cluster0.mnw5k9a.mongodb.net/phoneBook/?retryWrites=true&w=majority"

// connect
mongoose.connect(mongoURI);

const db=mongoose.connection;

db.once('open',()=> console.log("Connect to Mongo Db SuccessFully💥"))
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports=db;
