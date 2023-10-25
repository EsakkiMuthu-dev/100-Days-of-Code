import { useState,useEffect } from "react";
import Note from "./components/Note"
import noteService from "./services/noteService";
import Notifications from "./components/Notifications";

function App() {
  const [notes,setNotes]=useState([]);
  const[newNote,setNewNote]=useState(' ');
  const[showAll,setShowAll] = useState(true);
  const[message,setMessage] = useState(null);
  let importantStatus = true;

  useEffect(()=>{
    noteService
    .getAll()
    .then((data) => setNotes(data))
  
  },[])

  const addNote=(event)=>{
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: importantStatus==='true'?true:false,
      id: notes.length + 1,
    }
    noteService
    .create(noteObject)
    .then((response)=> {
      setNotes([...notes,response.data]);
      setNewNote('');
    });

  }

  const notesToShow=(showAll)?notes: notes.filter((note)=> note.important);  

  const toggleImportance =(id)=>{
    const currentNote= notes.find((note)=> note.id ===id);
    const updatedNote={...currentNote,important:(!currentNote.important)};
    noteService
      .update(id,updatedNote)
      .then((response)=>{
              setNotes(notes.map((note)=> note.id===id?response.data:note));})
      .catch((err)=>{
        setMessage(`The note '${currentNote.content}' was already deleted from server`);
        setNotes(notes.filter(n => n.id !== id))
        setTimeout(()=>{
          setMessage(null)
        },6000);
      });
    
  } 


  return (
    <>
      <h1 style={{textAlign:'center'}}>Notes App</h1>

      <Notifications message={message} />
      
     <button onClick={()=> setShowAll(!showAll)}> {showAll?"Show Important Only ":" Show All "} </button>
      <ul>
          { notesToShow.map((note)=>
           <Note key={note.id}  
                note={note} 
                toggleImportance={ ()=>toggleImportance(note.id)}
            />)}
      </ul>

      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={(event)=> setNewNote(event.target.value)} />
        <br />
        <br />
        <label> Important
        <select name="important" onChange={(event)=> importantStatus=event.target.value} >
          <option value="true"> true</option>
          <option value="false"> false</option>
        </select>
        </label>
        <br />
        <br />
        <button type="submit"> Add Note </button>
      </form>
  
    </>
  )
}

export default App
