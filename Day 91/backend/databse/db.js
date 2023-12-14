const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config;
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.once('connection',()=> console.log(`connected to mongodb successfully 🥳`))
db.on('error',(e)=> console.log(`got mongo Error : ${e}`));
db.on('close',()=>console.log('connection closed successfully!!'));

export default db;