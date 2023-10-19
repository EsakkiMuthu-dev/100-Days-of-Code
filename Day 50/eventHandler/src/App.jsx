import { useState } from 'react'


function App() {
  const [value, setValue] = useState(10);

  return (
    <>
      
     <h1>{value}</h1>
     <button>Reset to Zero</button>
    </>
  )
}

export default App
