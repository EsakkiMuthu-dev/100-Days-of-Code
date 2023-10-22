import { useState } from "react"
import Note from "./components/Note"


function App(props) {
  const [notes,setNotes]=useState(props.notes);
  const[newNote,setNewNote]=useState(' ');
  const[showAll,setShowAll] = useState(true);
  let importantStatus = true;
  
  const addNote=(event)=>{
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: importantStatus==='true'?true:false,
      id: notes.length + 1,
    }
    console.log(noteObject)
    setNotes([...notes,noteObject])
    setNewNote('');
  }

  const notesToShow=(showAll)?notes: notes.filter((note)=> note.important);
  console.log(notesToShow);
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>Notes App</h1>
      
     <button onClick={()=> setShowAll(!showAll)}> {showAll?"Show Important Only ":" Show All "} </button>
      <ul>
          { notesToShow.map((note)=> <Note key={note.id}  note={note.content}/>)}
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
