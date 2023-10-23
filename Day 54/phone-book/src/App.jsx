import { useState,useEffect } from "react"
import PhoneBook from "./components/PhoneBook";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import {v4 as uuidV4} from 'uuid';
import  {addContact,getAll,updateContact,deleteContact} from "./services/phoneBookService";

function App() {
  const[persons ,setPersons]=useState([]);
  const[personsToShow, setPersonsToShow]=useState(persons);

  useEffect(()=>{
    getAll()
    .then(({data}) =>{
      setPersons(data);
      setPersonsToShow(data);
    });
  },[])

  const generateUniqueId=()=> uuidV4();
  
  const isUserExists=(user)=>persons.filter(({name})=> name===user);
  
  function update(oldContact,name,number)
  {
    if(confirm(`${name}  already there .Do you want replace this number with old number?`)){
      let updatedContact=oldContact[0];
      updatedContact.number=number;
      updateContact(updatedContact.id,updatedContact)
     .then((res)=> {
      let upadtedPhoneBook = persons.filter((person)=> person.id!=updatedContact.id);
      upadtedPhoneBook.push(updatedContact);
      setPersons(upadtedPhoneBook);
      setPersonsToShow(upadtedPhoneBook);
     })
    }
  }

  function handleSubmit(name,number)
  {
    let oldContact=isUserExists(name);
    if(oldContact.length>0){
      update(oldContact,name,number);
      return;
    }
    
    let newPersonObject={
      name,
      number,
      id:generateUniqueId()
    }
  addContact(newPersonObject)
    .then(({data})=>{
      setPersons([...persons,data]);
      setPersonsToShow([...persons,data]);
    });

    
  }
  
  function handleFilter(value)
  {
    setPersonsToShow(persons.filter(({name})=> name.toLowerCase().includes(value)));
    
  }

  function handleDelete(id)
  {
    if(confirm(`Delete ${persons.find((person)=>person.id===id).name}`))
    { 
    deleteContact(id)
    .then(res=> {
      const updated=persons.filter((person)=> person.id!=id);
      setPersons(updated);
      setPersonsToShow(updated);
    
    });
    }
    
  }
  return (
    <>
      <Filter handleFilter={handleFilter} />
      <PhoneBook handleSubmit={handleSubmit} />
      <Numbers persons={personsToShow} handleDelete={handleDelete} />
    </>
  )
}

export default App
