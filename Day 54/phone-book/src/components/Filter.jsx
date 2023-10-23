import React, { useState } from 'react'

export default function Filter({handleFilter}) {
    
  return (
    <>
        <h1> Search Using Name </h1>
        <input type="text"  onChange={(event)=> {handleFilter(event.target.value);}} />
    </>
  )
}
