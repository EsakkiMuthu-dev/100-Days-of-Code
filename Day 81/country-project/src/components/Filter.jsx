import React, { useEffect, useState } from 'react'
import ShowResults from './ShowResults';
export default function Filter({data}) {
    const[name,setName]=useState('');
    const[results,setResults]=useState([]);
   
    useEffect(()=>{ 
        setResults(data.filter((country)=>(country.name.common).toLowerCase().includes(name)));
    
    },[name])
  return (
    <>
    <label> 
    Find Countries 
    <input type="text" name="filter" onChange={(event)=> setName(event.target.value)} /> 
    </label>
    
    <ShowResults results={results} name={name} />
    
    
    </>
  )
}
