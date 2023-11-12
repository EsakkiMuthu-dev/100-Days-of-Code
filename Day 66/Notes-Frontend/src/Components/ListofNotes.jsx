import React,{useState,useEffect} from 'react';
import Note from './Note';
import { deleteNote ,toggleImportance} from '../service/NoteService';
export default function ListofNotes({notes,updateNotes}) {
    const handleDelte=(id)=>{
        deleteNote(id)
        .then(updateNotes());
    }

    const handleToggleImportance =(id)=>{
      toggleImportance(id)
        .then(updateNotes());
    }
  return (
    <>
        <h3>List Of Notes</h3>
        <ul>
            {notes.map((note)=> <li key={note.id}>
              <Note 
              note={note} 
              handleDelte={handleDelte}
              handleToggleImportance={handleToggleImportance}
             /></li>)}
        </ul>
        
    </>
  )
}
