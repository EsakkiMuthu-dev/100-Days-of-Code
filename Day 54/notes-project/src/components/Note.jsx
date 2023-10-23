import React from 'react'

export default function Note({note,toggleImportance}) {
  const label=(note.important)?' important ':' Not important ';
  const color =(note.important)?'#36914e':'#507aa1';
  const btnStyle={
    marginLeft:'10px',
    backgroundColor:color,
    border:'none',
    padding:'5px',
    borderRadius:'3px',
  };
  

  return (
    <li style={{padding:'10px'}}>{note.content}
       <button 
       onClick={toggleImportance} 
       style={btnStyle}>{
       label}</button>
    </li>
  )
}
