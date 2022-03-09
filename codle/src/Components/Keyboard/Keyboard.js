import React, { useEffect } from 'react'
import KeyboardRows from "./KeyboardRows"
import KeyboardSuggestions from './KeyboardSuggestions'
import "./keyboard.css"


function Keyboard( { pressedKey } ) {

  function handleClick(keyClicked){
    pressedKey(keyClicked)
  }

  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"],
  ];

  const allKeys = keyboardRows.flat()

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (allKeys.includes(e.key.toLowerCase())) {
        handleClick(e.key.toLowerCase());
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);


  return (
    <KeyboardRows onKeyboardClick={handleClick}/>
  )
}

export default Keyboard