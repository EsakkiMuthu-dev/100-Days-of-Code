import React from 'react'
import Part from './Part'

export default function Content({parts}) {
    const totalExercises= parts.reduce((sum,part)=> sum+part.exercises,0)
  return (
    <>
    <ul>
        {
            parts.map((part)=> <Part key={part.id} name ={part.name} exercises={part.exercises} />)
        }
    </ul>

    <h3> Total of {totalExercises} Exercises</h3>
    </>
  )
}
