import axios from'axios';
const baseUrl="/api/notes";

const fetchNotes=async()=>{
    try{
    const notes= await axios.get(baseUrl);
    return notes;
    } catch(e){
        console.log(`Getting Error ${e}`);
    }
}

const addNote = async( note)=>{
    try{

        const response = await axios.post(baseUrl,note);
        return response;
    }catch(e)
    {
        return "Error while adding Notes";

    }
}

const deleteNote=async(id)=>{
    try{
        const res = await axios.delete(`${baseUrl}/${id}`);
        return res;

    }catch(e){
        console.log("Can't Delete this note");
    }
}

const toggleImportance =async(id)=>{
    try {
        const res = await axios.put(`${baseUrl}/${id}`);
        return res;
        
    } catch (error) {
        console.log(error)
    }
}


export {fetchNotes,addNote,deleteNote,toggleImportance};