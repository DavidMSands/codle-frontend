import React from 'react'
import KeyboardRows from "./KeyboardRows"
import "./keyboard.css"


function Keyboard( {} ) {

  function handleClick(keyClicked) {
    console.log(keyClicked)
  }

  return (
    <KeyboardRows onKeyboardClick={handleClick}/>
  )
}

export default Keyboard