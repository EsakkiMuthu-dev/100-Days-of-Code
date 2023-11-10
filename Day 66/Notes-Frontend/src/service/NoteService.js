import axios from'axios';
const baseUrl="http://localhost:3001/api/notes";

const fetchNotes=async()=>{
    try{
    const notes= await axios.get(baseUrl);
    return notes;
    } catch(e){
        console.log(`Getting Error ${e}`);
    }
}

export {fetchNotes};