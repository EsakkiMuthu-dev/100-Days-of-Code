import mongoose from 'mongoose';
import {MONGOURI} from '../utils/config.mjs';

mongoose.connect(MONGOURI);

const db = mongoose.connection;

db.once('open',()=> console.log("Connected To mongo DB Successfully💥"));
db.on('error',(e)=> console.log("Connection Error👾: "+e));
db.on('close',()=>console.log("Connection closed Successfully🌀"))

export default db;