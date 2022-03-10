import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardKeySet( { keys, onKeyboardClick, colors, guesses, round, rowId } ) {

  function handleClick(e) {
    onKeyboardClick(e.target.name)
  }
const currentRound = round.current

const colorIndex = guesses[currentRound].indexOf()

function keyColor(eachKey) {
  let colorsArr = []
  for (let row in guesses) {
    const arr = guesses[row].map((letter, i) => {
      return {
        letter: letter,
        color: colors[row][i]
      }
    })
    colorsArr.push(arr)
  }

  for (let row of colorsArr) {
    for (let letterObj of row) {
      // maybe make this a while loop so we don't stop at the first letter (we want the last occurance of the letter)
      if (letterObj.letter === eachKey) {
        return letterObj.color
      }
    }
  }

  // for (let row of colorsArr) {
  //   for (let letterObj of row) {
  //     if (letterObj.letter === eachKey) {
  //       if (letterObj.color === '#6aaa64') {
  //         return letterObj.color
  //       } else if (letterObj.color === '#e4bc3f') {
  //         return letterObj.color
  //       } else {
  //         return letterObj.color //'#808080'
  //       }
  //     }
  //   }
  // }
}

console.log(keyColor("e"))

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