const express = require('express');
const db = require('./config/db')
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const PORT = process.env.PORT||3001;

//  for parsing req.body as json
app.use(express.json());

// use routes
app.use('/api/contacts',contactRoutes);

//start server
app.listen( PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}/api/contacts`)
})
