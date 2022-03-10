import React, { useEffect } from 'react'
import KeyboardRows from "./KeyboardRows"
import KeyboardSuggestions from './KeyboardSuggestions'
import "./keyboard.css"


function Keyboard( { pressedKey, colors, guesses, wotd, round, modalStyle, isEnter } ) {
  // console.log(modalStyle)

// Object.values(guesses).includes(key)

  function handleClick(keyClicked){
    // console.log(modalStyle)
    if (modalStyle === "score-container1"){
      if (keyClicked.toLowerCase() !== "enter") {
      pressedKey(keyClicked.toLowerCase());
      }
      else if (keyClicked.toLowerCase() === "enter" && guesses[round.current][0] !== "") {
        pressedKey(keyClicked.toLowerCase())
      }
    } 
  }

  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
  ];

  const allKeys = keyboardRows.flat()

  useEffect(() => {
    function handleKeyUp(e) {
      if (allKeys.includes(e.key.toLowerCase())) {
        handleClick(e.key.toLowerCase());
      }
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [wotd, modalStyle]);


  return (
    <KeyboardRows keyboardRows={keyboardRows} onKeyboardClick={handleClick} guesses={guesses} colors={colors} round={round} isEnter={isEnter}/>
  )
}

export default Keyboard