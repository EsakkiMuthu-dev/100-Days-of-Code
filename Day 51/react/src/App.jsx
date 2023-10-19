import { useState } from 'react'
import Button from './Button';

const Display=({text,count} )=>{
  return(
    <>
    <h4>{text}: {count}</h4>
    </>
  )
}


function App() {

  const [survey, setSurvey] = useState({
    clicks:{good:0,
    bad:0,
    neutral:0},
    stats:{
      totalClicks:0,
    }
});

  const increaseCount=(rating)=>()=> {
    setSurvey({
      clicks:{...survey.clicks,[rating]:survey.clicks[rating]+1},
      stats:{totalClicks:survey.stats.totalClicks+1}

    });
    
  }

  const calcAvg =()=>{
    const{good,bad,neutral}= survey.clicks;
    let sum = (good*1)+(neutral*0)+(bad*-1);
    return sum/survey.stats.totalClicks;
  }

  const avg=(survey.stats.totalClicks==0)?0:calcAvg();
  const per =avg*100;


  return (
    <>
      <h1 style={{textAlign:'center',color:'green'}}>Unicafe Resturant FeedBack Survey Board</h1>
      <Button handleClick={increaseCount("good")} text={"good"} color={"#5cd65c"} />
      <Button handleClick={increaseCount("bad")} text={"bad"} color={"#ff5c33"} />
      <Button handleClick={increaseCount("neutral")} text={"neutral"} color={"#884dff"} />
      <Display text={"Good"} count={survey.clicks.good}  />
      <Display text={"Bad"} count={survey.clicks.bad}  />
      <Display text={"Neutral"} count={survey.clicks.neutral} />
      <Display text={"All"} count={survey.stats.totalClicks} />
      <Display text={"Average"} count={avg} />
      <Display text={"Percentage"} count={per}/>

    </>
  )
}

export default App
