import { useState } from "react"
import PhoneBook from "./components/PhoneBook";
import Numbers from "./components/Numbers";
function App() {
  const[persons ,setPersons]=useState([]);
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
    alert(`${name}  added SuccessFully!! `);
  }
  return (
    <>
      <PhoneBook handleSubmit={handleSubmit} />
      <Numbers persons={persons} />
    </>
  )
}

export default App
