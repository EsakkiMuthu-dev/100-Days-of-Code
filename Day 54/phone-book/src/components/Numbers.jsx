import React from 'react'

export default function Numbers({persons}) {
  return (
    <>
        <h1> Numbers </h1>
        <ul>
            {persons.map((person,index)=> <li key={index}>{person.name} : {person.number} </li>)}
        </ul>
    </>
  )
}
