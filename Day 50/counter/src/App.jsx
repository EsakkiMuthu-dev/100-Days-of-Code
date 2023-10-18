import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import Clicks from "./Clicks";


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
      <Clicks />

    </>
  )
}

export default App
