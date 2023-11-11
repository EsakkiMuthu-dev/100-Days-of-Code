import React,{useState} from 'react'
import StatusButton from './StatusButton'
export default function Note({note,handleDelte}) {
  console.log(note);
  return (
        <h4> {note.content}  - <StatusButton note={note} handleDelte={handleDelte}/></h4>
  )  
  
}
