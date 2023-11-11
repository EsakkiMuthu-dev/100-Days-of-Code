import React from 'react'

export default function StatusButton({note,handleDelte}) {
    const text = note.important?"Important":"Not Important";
    const color= note.important?"red":"blue";
    console.log(color)
  return (
    <>
    <button style={{
    "backgroundColor":color,
    "border":"none",
    "borderRadius":"5px",
    "padding":"10px",
  "margin":"10px"}}
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
