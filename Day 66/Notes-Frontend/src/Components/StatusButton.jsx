import React from 'react'

export default function StatusButton({note,handleDelte,handleToggleImportance}) {
    const text = note.important?"Important":"Not Important";
    const color= note.important?"red":"blue";
  
  return (
    <>
    <button style={{
    "backgroundColor":color,
    "border":"none",
    "borderRadius":"5px",
    "padding":"10px",
  "margin":"10px"}}
      onClick={()=>handleToggleImportance(note.id)}
    >{text}</button>

    <button
    style={{
      "backgroundColor":"grey",
      "border":"none",
      "borderRadius":"5px",
      "padding":"10px",
    "margin":"10px"}}
    onClick={()=>handleDelte(note.id)}

    >
      Delete
    </button>
    </>
  )
}
