import React from 'react'


export default function Numbers({persons,handleDelete}) {
  const  btnStyle={
    marginLeft:'10px',
    backgroundColor:'#693016',
    border:'none',
    color:'white',
    bordeRadius:'3px',
    padding:'3px'
   
  }
  return (
    <>
        <h1> Numbers </h1>
        <ul>
            {persons.map(({name,number,id})=> 
            <li key={id} style={{marginBottom:'10px'}} >{name} : {number} 
            <button 
             id={id} 
             style={btnStyle} 
             onClick={(event)=>handleDelete(event.target.id)}> Delete </button>

            </li> 
                
        )}
        </ul>
       
    </>
  )
}
