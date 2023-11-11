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
let notes=[
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
    const body=req.body;
    if(!body.content){
        res.status(400).json({
            error:"Content is missing"
        })
    }

    const newNote= {
        id:uuid.v4(),
        content:body.content,
        important:body.important ||false
    }
    const isFound = notes.reduce((prev,curr)=>{
        return prev || body.content==curr.content
    },false)
    console.log(isFound);
    if(isFound) res.status(409).send("Enter Unique Content !!")
    else{
        notes.push(newNote);
        res.json(notes);
    }
    

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
    res.status(204).send("Note Got Deleted Successfully!").end();
})



//info
app.get('/info',(req,res)=>{
    const currentTime=new Date();
    const responseHtml=`
    <p>Notes has ${notes.length} entries</p>
    <br> <p>${currentTime} </p>`
    
    res.send(responseHtml);
})
app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);
})

