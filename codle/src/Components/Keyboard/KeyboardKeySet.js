import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardKeySet( { keys, onKeyboardClick, colors, guesses, round, rowId } ) {

  function handleClick(e) {
    onKeyboardClick(e.target.name)
  }
const currentRound = round.current
// does guesses[currentround] include this key, if yes return markers 
// colors at the same location as guesses[currentround]


const keyColor = (eachKey) => {
    
  guesses[currentRound].map((letter, i) => {
      console.log(letter + i)
        if (letter !== eachKey) {
          // console.log(colors[currentRound][i] + "," + guesses[currentRound][i])
          console.log(letter + eachKey)
          return colors[currentRound][i]
        }
    })
    // console.log(guessColorArry)
}
// console.log(keyColor)
// console.log(keyColor())
return (
  keys[rowId].map((eachKey) => (
    <button style={{backgroundColor: "#fff"}} onClick={handleClick} name={eachKey} key={eachKey} className="keyboard-key" id={`key-${eachKey}`} > 
        <KeyboardKey key={eachKey} eachKey={eachKey}/>
    </button>
  ))
  )
}

export default KeyboardKeySet