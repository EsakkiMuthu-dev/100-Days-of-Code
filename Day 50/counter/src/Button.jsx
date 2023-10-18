import React from 'react'

export default function Button({handleClick,text}) {
  return (
    <>
    <button onClick={handleClick}>{text}</button>
    </>
  )
}

