// import the express app
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
const app =express() // create express app and store it in app variable
const PORT =3001;

//use cors
app.use(cors());

//use json parser 
app.use(express.json());

// intialise Notes
const notes=[
    {
        id:uuid.v4(),
        content:"Doing Backend!!",
        important:true

    },
    {
        id:uuid.v4(),
        content:"Doing Frontend!!",
        important:true

    },
    {
        id:uuid.v4(),
        content:"Finishing reading react Docs!!",
        important:true

    },
    {
        id:uuid.v4(),
        content:"Wasting Time",
        important:false

    },
]

app.get('/',(req,res)=>{
    res.send("<h1>Hello from Backend</h1>");
})

app.post('/api/notes',(req,res)=>{
    const newNote= req.body;
    console.log(newNote);
    res.json(newNote);

})

app.get('/api/notes',(req,res)=>{

    res.json(notes);
})
app.get('/api/notes/:id',(req,res)=>{
    const id= req.params.id;
    const note = notes.find((note)=> note.id===id);
    if(note)res.json(note)
    else res.status(404).send("Note not Found:)")
})
app.delete('/api/notes/:id',(req,res)=>{
    const id=req.params.id;
    notes = notes.filter((note)=> note.id!=id);
    res.status(204).end();
})
app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);
})

