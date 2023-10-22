import React from 'react'
import { useState } from 'react';

export default function PhoneBook({handleSubmit}) {
    const[name,setName]=useState('');
    const[number,setNumber]=useState('');
    function handleClick()
    {
        handleSubmit(name,number);
        setName('');
        setNumber('');
    }
  return (
   <>
    <h1> Phone Book </h1>
    <label > Name: </label>
    <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
    <br />
    <label > PhoneNumber: </label>
    <input type="text" value={number} onChange={(event)=> setNumber(event.target.value)} />
    <button onClick={handleClick}> Add Person </button>
   </>
  )
}
