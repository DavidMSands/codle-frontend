import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import KeyboardRow from "./KeyboardRow"
import "./keyboard.css"


function Keyboard() {

  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
  const row3 = ["shift", "z", "x", "c", "v", "b", "n", "m", "backspace"]
  return (
    <div id="keyboard">
      I'm Qwerty!
      <KeyboardRow class="keyboard-row" id ="keyboard-row-1" keys={row1}/>
      <KeyboardRow class="keyboard-row" id ="keyboard-row-2" keys={row2}/>
      <KeyboardRow class="keyboard-row" id ="keyboard-row-3" keys={row3}/>
    </div>
  )
}

export default Keyboard