const express = require('express');
const db= require('./config/db.js');
const router = require('./routes/ContactRoutes');
const morgan = require('morgan');
const PORT = 3001;
//create an app
const app = express();
//add middle wares
app.use(express.json()); // adding body parser
app.use(morgan('dev'));
app.use('/api/contacts',router);

app.listen(PORT,()=>{
    console.log(`Sever Started at http://localhost:${PORT}/api/contact`)
   
})