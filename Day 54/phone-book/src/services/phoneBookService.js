import axios from 'axios';

const baseUrl='http://localhost:3001/persons';

export const getAll= ()=> axios.get(baseUrl);

export const addContact=(newContact)=> axios.post(baseUrl,newContact);
export const deleteContact=(id)=> axios.delete(`${baseUrl}/${id}`);
export const updateContact=(id,updatedContact)=> axios.put(`${baseUrl}/${id}`,updatedContact);

