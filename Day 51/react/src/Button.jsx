
import React from 'react'

// export default function Button() {
//   return (
//     <div>Button</div>
//   )
// }


const Button =({handleClick,text,color})=>{
    const btnStyle={
      backgroundColor:color,
      padding:"5px",
      margin:"10px",
      textAlign:"center",
      borderRadius:"3px",
      border:'None'
  
    }
    return(
      <>
    <button onClick={handleClick} style={btnStyle} >{text}</button>
    </>
    )
  }

  export default Button;