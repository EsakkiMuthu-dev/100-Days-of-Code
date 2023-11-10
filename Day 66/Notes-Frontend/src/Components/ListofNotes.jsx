import React,{useState,useEffect} from 'react';
import {fetchNotes} from '../service/NoteService';
import Note from './Note';
export default function ListofNotes() {
    const[notes,setNotes]=useState([]);

    //store notes
    const storeNotes= async()=>{
        let response = await fetchNotes();
        setNotes(response.data);
    }

    useEffect(()=>{  
        storeNotes();
    },[])
    console.log(notes);

  return (
    <>
        <h3>List Of Notes</h3>
        <ul>
            {notes.map((note)=> <li key={note.id}><Note note={note} /></li>)}
        </ul>
        
    </>
  )
}
