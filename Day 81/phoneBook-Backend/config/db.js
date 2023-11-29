const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://esakkimuthu6842:Muthu123@cluster0.mnw5k9a.mongodb.net/phoneBook?retryWrites=true&w=majority";

// lets connect
mongoose.connect(mongoURI)

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connected to mongo db successfully 🤩")
})
db.on('error',(e)=>{
    console.log("Mongo DB Error : "+e);
})