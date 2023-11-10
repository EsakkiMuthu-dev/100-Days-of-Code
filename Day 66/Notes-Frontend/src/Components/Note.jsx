import React,{useState} from 'react'
import StatusButton from './StatusButton'
export default function Note({note}) {
  return (
        <h4> {note.content}  - <StatusButton important={note.important}/></h4>
  )  
  
}
