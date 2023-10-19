import { useState } from 'react'
import Button from './Button';
import Statistics from './Statistics';



function App() {

  const [survey, setSurvey] = useState({
    good:0,
    bad:0,
    neutral:0,
    totalClicks:0
});

  const increaseCount=(rating)=>()=> {
    setSurvey({...survey,[rating]:survey[rating]+1,totalClicks:survey.totalClicks+1});
    
  }


  return (
    <>
      <h1 style={{textAlign:'center',color:'green'}}>Unicafe Resturant FeedBack Survey Board</h1>
      <Button handleClick={increaseCount("good")} text={"good"} color={"#5cd65c"} />
      <Button handleClick={increaseCount("bad")} text={"bad"} color={"#ff5c33"} />
      <Button handleClick={increaseCount("neutral")} text={"neutral"} color={"#884dff"} />
      <Statistics data={survey} />
 

    </>
  )
}

export default App
