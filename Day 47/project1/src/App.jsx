import { useState } from 'react'
const Header=({details})=>{
  console.log(details);
  return(
    <>
    <header>  
      <h1>{details.name}</h1>
      
      </header>    
    </>
  )

}
const Content =({details,number})=>{
  console.log(details.name , details.parts);
  console.log(number);
  return(
    <>
    <p>Course: {details.name} , Exercises:{details.parts[number].exercise}</p>
    </>
  )

  }
const Total= ({exerciseCount,course})=>{
  <p>Total Number of exercises covered in this {course} is {exerciseCount}</p>



}
function App() {
  // const course ="Half Stack Development";
  const details={
    name:"Half Stack Development",
    parts:[{
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
    }]
  };
  const totalNoOfExercises=()=>{
    let total = 0;
    for(let el of details.parts)
    {
      total+=el.exercise;
    }
    
    return total;
  }
  // const part1={
  //   course:"Fundamentals of react",
  //   exercise:10
  // }
  // const part2={
  //   course:"Using Props to PAss the data",
  //   exercise:7
  // }
  // const part3={
  //   course:"State of an Component",
  //   exercise:14
  // }
  // const part1="Fundamentals of react";
  // const part2="Using Props to PAss the data"
  // const part3="State of an Component";
  // const exercise1=10;
  // const exercise2=7;
  // const exercise3=14;


  return (
    <>
      <Header details={details} />
      {/* <p>{part1} , Exercises: {exercise1}</p> */}
      <Content details={details} number="0" ></Content>
      <Content details={details} number="1"></Content>
      <Content details={details} number="2"></Content>
      <p>Total Number of exercises covered in this {details.name} is {totalNoOfExercises()}</p>
      {/* <Total exerciseTotal={part1.exercise+part2.exercise+part3.exercise}  course ={course}/> */}
    </>
  )
}

export default App
