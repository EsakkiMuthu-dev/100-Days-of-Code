const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const db = require('./config/db')
const app = express();
const PORT = process.env.PORT||3001;

//  for parsing req.bosy as json
app.use(express.json());

// use routes
app.use('/api/contacts',contactRoutes);

//start server
app.listen( PORT,()=>{
    console.log(`Server Started on http://localhost/api/contact:${PORT}`)
})
