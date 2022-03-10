import React from 'react'
import KeyboardKeySet from './KeyboardKeySet'

function KeyboardRows( { onKeyboardClick, guesses, colors, keyboardRows, round, isEnter } ) {
    
    function handleClick(keyClicked) {
        onKeyboardClick(keyClicked.toLowerCase())
    }

   return (//each row has it's own container div to account for special needs on row 2
     <div id="keyboard-container">
       <div id="keyboard">
         <div className="keyboard-row" id="keyboard-row-1">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows} rowId={0} guesses={guesses} colors={colors} round={round} isEnter={isEnter}/>
         </div>
         <div className="keyboard-row" id="keyboard-row-2">
           <div className="flex-fill"></div>
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows} rowId={1} guesses={guesses} colors={colors} round={round} isEnter={isEnter}/>
           <div className="flex-fill"></div>
         </div>
         <div className="keyboard-row" id="keyboard-row-3">
           <KeyboardKeySet onKeyboardClick={handleClick} keys={keyboardRows} rowId={2} guesses={guesses} colors={colors} round={round} isEnter={isEnter}/>
         </div>
       </div>
     </div>
   )
}

export default KeyboardRows