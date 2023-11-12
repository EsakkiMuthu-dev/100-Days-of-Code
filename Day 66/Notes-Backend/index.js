// import the express app
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
const morgan=require('morgan'); // morgan for logging!!
const app =express(); // create express app and store it in app variable
const PORT =process.env.PORT||3001;

//use cors
app.use(cors());

//use json parser 
app.use(express.json());


//request logger
// const requestLogger = (request, response, next) => {
//     console.log('Method:', request.method)
//     console.log('Path:  ', request.path)
//     console.log('Body:  ', request.body)
//     console.log('---')
//     next()
//   }
// app.use(requestLogger);

// morgan logger
app.use(morgan('dev'));

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

app.put('/api/notes/:id', (req, res) => {
    const id =req.params.id;
    
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    // Update the importance of the note
    notes[noteIndex].important = !notes[noteIndex].important;

    // Send a response
    res.json({
        message: "Note updated successfully",
        note: notes[noteIndex]
    });
});



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

