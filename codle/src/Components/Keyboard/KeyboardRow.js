import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardRow( { keys, onKeyboardClick } ) {

    function handleClick(e) {
        onKeyboardClick(e.target.name)
    }
  return (
    keys.map((eachKey) => (
    <button onClick={handleClick} name={eachKey} key={eachKey} className="keyboard-key" id={`key-${eachKey}`}>
        <KeyboardKey key={eachKey} eachKey={eachKey}/>
    </button>
  ))
  )
}

export default KeyboardRow