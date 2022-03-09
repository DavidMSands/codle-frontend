import React from 'react'
import KeyboardKeySet from './KeyboardKeySet'

function KeyboardRows( { onKeyboardClick, guesses, colors, keyboardRows } ) {
    
    function handleClick(keyClicked) {
        onKeyboardClick(keyClicked.toLowerCase())
    }
   //keyboard rows
  //  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
  //  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
  //  const row3 = ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
   return (//each row has it's own container div to account for special needs on row 2
     <div id="keyboard-container">
       <div id="keyboard">
         <div className="keyboard-row" id="keyboard-row-1">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows[0]} guesses={guesses} colors={colors}/>
         </div>
         <div className="keyboard-row" id="keyboard-row-2">
           <div className="flex-fill"></div>
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows[1]} guesses={guesses} colors={colors}/>
           <div className="flex-fill"></div>
         </div>
         <div className="keyboard-row" id="keyboard-row-3">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows[2]} guesses={guesses} colors={colors}/>
         </div>
       </div>
     </div>
   )
}

export default KeyboardRows