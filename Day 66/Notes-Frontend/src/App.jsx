import { useState,useEffect } from 'react';
import ListofNotes from './Components/ListofNotes';
import AddNote from './Components/AddNote';
import { fetchNotes } from './service/NoteService';
function App() {
  const[notes,setNotes]=useState([]);

    //store notes
    const storeNotes= async()=>{
        let response = await fetchNotes();
        setNotes(response.data);
    }

    useEffect(()=>{  
        storeNotes();
    },[])
 
    // Create a method to update note States
    const updateNotes =()=>{
      storeNotes();
    } 

    


  return (
    <>
      <h1>Notes Application</h1>
      <AddNote updateNotes={updateNotes} />
      <ListofNotes notes={notes} updateNotes={updateNotes} />
    </>
  )
}

export default App
