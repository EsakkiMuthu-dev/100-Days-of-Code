import React, { useState } from 'react'
import CountryDetails from './CountryDetails'
export default function ShowResults({results,name}) {
    const [showView,setShowView]=useState(null);
   const handleShow=(index)=>{
    console.log(results[index]);
    setShowView(<CountryDetails country={results[index]} />)
   }
  if(results.length>10)
  {
    return <p>Too many matches, specify another filter </p>
  }else if(results.length>1 && results.length<10)
  {
    let arr= results.filter((val)=>(val.name.common).toLowerCase()===name)
    console.log(arr);
    if(arr.length==1)
    {

        console.log("displaying country name")
        return(<CountryDetails country={arr[0]} />)
    }
    else{
    return (
        <>
        <ul>
        {results.map((val,index)=> <li key={index}>{val.name.common}
         <button onClick={()=>handleShow(index)}> Show</button>
         <div>{showView}</div></li> )}
        </ul>
        </>
    )
    }
  }else if(results.length===1){
    return(
        <>
            <CountryDetails country={results[0]} />
        
        </>
    )
  }
}
