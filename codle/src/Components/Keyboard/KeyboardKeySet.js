import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardKeySet( { keys, onKeyboardClick, colors, guesses, round, rowId, isEnter } ) {

  function handleClick(e) {
    onKeyboardClick(e.target.name)
  }

function keyColor(eachKey) {
  let colorsArr = []
  for (let row in guesses) {
    const arr = guesses[row].map((letter, i) => {
      return {
        letter: letter,
        color: colors[row][i]
      }
    })
    if (isEnter === true) {
      colorsArr.unshift(arr)
    }
  }

  if (colorsArr[0]) {
    for (let row of colorsArr) {
      for (let letterObj of row) {
        // console.log(letterObj.letter, letterObj.color)
        // maybe make this a while loop so we don't stop at the first letter (we want the last occurance of the letter)
        if (letterObj.letter === eachKey) {
          return letterObj.color
        }
      }
    }
  }
}

// `${keyColor(eachKey)}`

return (
  keys[rowId].map((eachKey) => (
    <button style={{backgroundColor: `${keyColor(eachKey)}`}} onClick={handleClick} name={eachKey} key={eachKey} className="keyboard-key" id={`key-${eachKey}`} > 
        <KeyboardKey key={eachKey} eachKey={eachKey}/>
    </button>
  ))
  )
}

export default KeyboardKeySet