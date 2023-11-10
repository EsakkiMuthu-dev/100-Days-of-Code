import React from 'react'

export default function StatusButton({important}) {
    const text = important?"Important":"Not Important";
    const color= important?"red":"blue";
    console.log(color)
  return (
    <>
    <button style={{
    "backgroundColor":color,
    "border":"none",
    "borderRadius":"5px",
    "padding":"10px"}}>{text}</button>
    </>
  )
}
