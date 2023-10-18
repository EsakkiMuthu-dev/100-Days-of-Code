import React from 'react'

export default function History({allClicks}) {
  if(allClicks.length==0)
  {
    return(
        <>
        <p>You can see the history of pressed buttons Here.</p>
        </>
    )
  }else{
    return(
        <>
        <p>History of Clicks are : {allClicks.join(",")}</p>
        </>
    )
  }
}
