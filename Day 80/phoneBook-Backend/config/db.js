const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://esakkimuthu6842:Muthu123@cluster0.mnw5k9a.mongodb.net/phoneBook?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.once('open', () => console.log("Connected to MongoDB successfully 💥"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
