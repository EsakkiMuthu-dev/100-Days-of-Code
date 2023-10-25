import { useEffect, useState } from "react";
import axios from 'axios';
import Filter from "./components/Filter";
function App() {
  const[check,setCheck]=useState(0);
  const[data,setData] = useState([]);
  
  useEffect(()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((res)=>{
        setData(res.data);
        
      })
  },[])
 
  return (
    <>
      <h1>Country Info Project</h1>
      <Filter data={data} />
      
    </>
  )
}

export default App
