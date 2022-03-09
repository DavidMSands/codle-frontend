import React from 'react'
import KeyboardKey from './KeyboardKey'
//take in the keys from each row and map them out to individual divs
function KeyboardKeySet( { keys, onKeyboardClick, colors, guesses } ) {

  function handleClick(e) {
    onKeyboardClick(e.target.name)
}

const coolness = () => {console.log("yes match")}
const nahhness = () => {console.log("no false")}

// Object.values(guesses).map((word, i) => console.log(i + word))
// Object.values(guesses).includes(eachKey)
// for (let guess in guesses) {
//   for (let letter of guess) {
//     letter.includes(eachKey) ? coolness() : nahhness()
//   }
// }

return (
  keys.map((eachKey) => (
    // if the letter is contained in guesses[roundIndex] 
    // add the color from the corresponding location in the colors obj
    // to each button
    <button onClick={handleClick} name={eachKey} key={eachKey} className="keyboard-key" id={`key-${eachKey}`}>
        <KeyboardKey key={eachKey} eachKey={eachKey}/>
    </button>
  ))
  )
}

export default KeyboardKeySet