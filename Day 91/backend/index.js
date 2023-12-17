const db= require('./databse/db');
const  todoRoutes = require('./routes/todoRoutes');
const morgan = require('morgan');
const express = require('express');
const dotenv= require('dotenv');
const app = express();
dotenv.configDotenv();

app.use('/api',todoRoutes);

app.listen(process.env.PORT,()=> console.log(`Server started on http:localhost/${process.env.PORT}`));

