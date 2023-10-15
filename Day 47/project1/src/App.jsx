import { useState } from 'react'
const Header=({course})=>{
  console.log(course)
  return(
    <>
    <header>  
      <h1>{course}</h1>
      
      </header>    
    </>
  )

}
const Content =({name,exerciseCount})=>{
  console.log(name,exerciseCount)
  return(
    <>
    <p>Course: {name} , Exercises:{exerciseCount}</p>
    </>
  )

  }
const Total= ({exerciseCount,course})=>{
  <p>Total Number of exercises covered in this {course} is {exerciseCount}</p>



}
function App() {
  const course ="Half Stack Development";
  const part=[
    {
      course:"Fundamentals of react",
      exercise:10
    },
    {
      course:"Using Props to PAss the data",
      exercise:7
    },
    {
      course:"State of an Component",
      exercise:14
    }
  ]
  const part1={
    course:"Fundamentals of react",
    exercise:10
  }
  const part2={
    course:"Using Props to PAss the data",
    exercise:7
  }
  const part3={
    course:"State of an Component",
    exercise:14
  }
  // const part1="Fundamentals of react";
  // const part2="Using Props to PAss the data"
  // const part3="State of an Component";
  // const exercise1=10;
  const exercise2=7;
  const exercise3=14;

  return (
    <>
      <Header course={course} />
      {/* <p>{part1} , Exercises: {exercise1}</p> */}
      <Content name={part[0].course} exerciseCount={part[0].exercise}></Content>
      <Content name={part[1].course} exerciseCount={part[1].exercise}></Content>
      <Content name={part[2].course} exerciseCount={part[2].exercise}></Content>
      {/* <p>Total Number of exercises covered in this {course} is {exercise1+exercise2+exercise3}</p> */}
      <Total exerciseTotal={part1.exercise+part2.exercise+part3.exercise}  course ={course}/>
    </>
  )
}

export default App
