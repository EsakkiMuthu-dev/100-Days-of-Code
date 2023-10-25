import React from 'react'

export default function Notifications({message}) {
    if(message === null){
        return null
    }
  return (
    <div className='error'>
        {message}
    </div>
  )
}
