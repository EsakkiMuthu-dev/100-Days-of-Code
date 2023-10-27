// const http = require('http');
const express=require('express');
const app = express()
const PORT=3001;
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get('/',(req,res)=>{
    res.send("<h1> Hello World!! </h1>");
})
app.get('/api/notes',(request,response)=>{
    response.json(notes);
})


app.get('/api/notes/:id',(request,response)=>{
    const id= request.params.id;
    const note = notes.find((note)=>note.id===Number.parseInt(id));
    if(note) response.json(note);
    else {
        response.status(404).send('No notes found!!');
    }
})

app.delete('/api/notes/:id',(request,response)=>{
    const id = Number(request.params.id);
    notes = notes.filter((note)=> note.id != id)
    
        response.status(204).send(' ~(~')
    
})

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
})
// const app=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(notes));
// })
// app.listen(PORT)
