import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import History from './History';
export default function Clicks() {
    const[clicks,setClicks]=useState({left:0,right:0});
    const[allClicks,setAllClicks]=useState([]);
    const [totalClicks,setTotalClicks]=useState(0);
    const increaseLeftButton = ()=>{
        const updatedLeft=clicks.left+1;
        setClicks({...clicks,left:updatedLeft});
        
        setTotalClicks(updatedLeft+clicks.right);
        setAllClicks(allClicks.concat('L'));
    };
    const increaseRightButton = ()=>{
       
        const updatedRight= clicks.right+1;
        setClicks({...clicks,right:updatedRight});
       
        setTotalClicks(clicks.left+updatedRight);
        setAllClicks(allClicks.concat('R'));
    }

  return (
    <div>
        <span>
            left:<Display count={clicks.left} />
        </span>
        <span>
            right:<Display count={clicks.right} />
        </span>
        <Button handleClick={increaseLeftButton} text={"Increase Left"} />
        <Button handleClick={increaseRightButton} text={"Increase Right"} />
        <History allClicks={allClicks} />
        <p>total Clicks: {totalClicks}</p>
        
    </div>
  )
}
