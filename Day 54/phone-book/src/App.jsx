import { useState } from "react"
import PhoneBook from "./components/PhoneBook";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
function App() {
  const[persons ,setPersons]=useState([
    { name: 'Arto Hellas', number: '040-123456'  },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const isUserExists=(user)=>persons.find(({name})=> name===user);
  const[personsToShow, setPersonsToShow]=useState(persons);

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
