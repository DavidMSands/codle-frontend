import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardKeySet( { keys, onKeyboardClick, colors, guesses, round, rowId } ) {

  function handleClick(e) {
    onKeyboardClick(e.target.name)
  }
const currentRound = round.current

const keyColor = (eachKey) => {
  const arr = guesses[currentRound].map((letter, i) => letter === eachKey ? colors[currentRound][i] : null)
  const keyColor = arr.filter(el => el)
  return keyColor[0]
}

return (
  keys[rowId].map((eachKey) => (
    <button style={{backgroundColor: `${keyColor(eachKey)}`}} onClick={handleClick} name={eachKey} key={eachKey} className="keyboard-key" id={`key-${eachKey}`} > 
        <KeyboardKey key={eachKey} eachKey={eachKey}/>
    </button>
  ))
  )
}

export default KeyboardKeySet