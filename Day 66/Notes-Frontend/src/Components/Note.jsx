import React,{useState} from 'react'
import StatusButton from './StatusButton'
export default function Note({note,handleDelte,handleToggleImportance}) {
 
  return (
        <h4> {note.content}  - <StatusButton note={note} handleToggleImportance={handleToggleImportance} handleDelte={handleDelte}/></h4>
  )  
  
}
