import React from 'react'

export default function Statistics({ data}) {
    const{good,bad,neutral,totalClicks}= data;
    const calcAvg =()=>{
        let sum = (good*1)+(neutral*0)+(bad*-1);
        return sum/totalClicks;
    }
    
    const avg=calcAvg();
    const per =avg*100;

  if(good===0 && bad ===0 && neutral===0)
  {
    return(
        <>
        <h1>Statistcs</h1>
        <p>No FeedBacks Given</p>
        </>
    )
  }else{
    return(
        <>
        <h1>Statistics</h1>
        <table>
            <tbody>
            <tr>
                <td>Good</td>
                <td>{good}</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>{bad}</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
            </tr>
            <tr>
                <td>Average</td>
                <td>{avg}</td>
            </tr>
            <tr>
                <td>Percentage</td>
                <td>{per}%</td>
            </tr>
            </tbody>
        </table>
      
        
        </>
    )
  }
}
