import axios from "axios";

const baseUrl='http://localhost:3001/notes';

const getAll=async () => {
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
      } 
  
    const res = await axios.get(baseUrl);
    return [...res.data,nonExisting];
    
} 
const create=(newNote)=> axios.post(baseUrl,newNote);
const update =(id,changedNote)=>axios.put(`${baseUrl}/${id}`,changedNote);

export default{
    getAll,
    create,
    update
}