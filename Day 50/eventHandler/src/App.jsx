import { useState } from 'react'


function App() {
  const [value, setValue] = useState(10);
  const handleClick=(who)=>{
    return ()=>{
    setValue(0);
    console.log("You clicked me!! " ,who);
    }
  }

  return (
    <>
      
     <h1>{value}</h1>
     <button onClick={handleClick("React")}>Reset to Zero</button>
    </>
  )
}

export default App
