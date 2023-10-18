import { useState } from "react";


//Display
const Display=({count})=>{
  return(
    <>
      <h1>{count}</h1>
    </>
  )
}

//Button
const Button =({handleClick,text})=>{
  return(
    <>
    <button onClick={handleClick}>
    {text}
    </button>
    </>
  )
}


function App() {
  const[count,setCount] = useState(0);
  const increaseByOne=()=> setCount(count+1);
  const decreaseByOne=()=> setCount(count-1);
  const reset=()=> setCount(0);
  
  return (
    <>
      <h1 >hello</h1>
      <Display count={count} />
      <Button handleClick={increaseByOne} text={"Increase Count"} />
      <Button handleClick={decreaseByOne} text={"Decrease Count"} />
      <Button handleClick={reset} text={"reset"} />
      {/* <Button handleClick={reset} > reset</Button> */}

    </>
  )
}

export default App
