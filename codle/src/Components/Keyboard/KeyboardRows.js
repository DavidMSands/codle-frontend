import React from 'react'
import KeyboardKeySet from './KeyboardKeySet'

function KeyboardRows( { onKeyboardClick } ) {
    
    function handleClick(keyClicked) {
        onKeyboardClick(keyClicked)
    }

   //keyboard rows
   const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
   const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
   const row3 = ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"]
   return (//each row has it's own container div to account for special needs on row 2
     <div id="keyboard-container">
       <div id="keyboard">
         <div className="keyboard-row" id="keyboard-row-1">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={row1}/>
         </div>
         <div className="keyboard-row" id="keyboard-row-2">
           <div className="flex-fill"></div>
           <KeyboardKeySet onKeyboardClick={handleClick} keys={row2}/>
           <div className="flex-fill"></div>
         </div>
         <div className="keyboard-row" id="keyboard-row-3">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={row3}/>
         </div>
       </div>
     </div>
   )
}

export default KeyboardRows