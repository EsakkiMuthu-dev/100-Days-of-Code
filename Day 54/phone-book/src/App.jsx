import { useState,useEffect } from "react"
import PhoneBook from "./components/PhoneBook";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import axios from 'axios';
function App() {
  const[persons ,setPersons]=useState([]);
  const[personsToShow, setPersonsToShow]=useState(persons);

  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(({data}) =>{
      setPersons(data);
      setPersonsToShow(data);
    });

  },[])

  
  const isUserExists=(user)=>persons.find(({name})=> name===user);
  
  function handleSubmit(name,number)
  {
 
    if(isUserExists(name)){
      alert(`${name}  already there `);
      return;
    }
    
    let newPersonObject={
      'name':name,
      'number':number
    }
    setPersons([...persons,newPersonObject]);
    setPersonsToShow([...persons,newPersonObject]);
    alert(`${name}  added SuccessFully!! `);
  }
  
  function handleFilter(value)
  {
    setPersonsToShow(persons.filter(({name})=> name.toLowerCase().includes(value)));
    
  }
  return (
    <>
      <Filter handleFilter={handleFilter} />
      <PhoneBook handleSubmit={handleSubmit} />
      <Numbers persons={personsToShow} />
    </>
  )
}

export default App
