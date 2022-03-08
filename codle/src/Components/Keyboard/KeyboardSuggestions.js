import React, {useState, useEffect} from 'react'

const letters = ["e", "l", "y"]

function KeyboardSuggestions( {letters} ) {

    const [badLetters, setBadLetters] = useState([])
    //another state for correct letters and correct correct letters

    useEffect(()=>{
        setBadLetters(letters)
    }, [])

    // find the keys with the names that match the badLetters array
    // add the class name of .suggested-off to change the bg color
    // match pattern of the board (orange, green, dark)

    // check against the correct word of the day
    // hold state for guesses tried
    // gameboard logic:
    // when user submits: check last guess against WOTD 
    // if last guess includes
    
  return (
    <div>SuggestOff</div>
  )
}

export default KeyboardSuggestions