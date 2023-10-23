import React from 'react'

export default function Numbers({persons}) {
  return (
    <>
        <h1> Numbers </h1>
       { <ul>
            {persons.map(({name,number},index)=> <li key={index}>{name} : {number} </li>)}
        </ul>
       }
    </>
  )
}
