import React, {useState, useEffect} from 'react'

letters = ["e", "l", "y"]

function SuggestOff( {letters} ) {

    const [badLetters, setBadLetters] = useState([])
    //another state for correct letters and correct correct letters

    useEffect(()=>{
        setBadLetters(letters)
    }, [])

    // find the keys with the names that match the badLetters array
    // add the class name of .suggested-off to change the bg color
    // match pattern of the board (orange, green, dark)
    
  return (
    <div>SuggestOff</div>
  )
}

export default SuggestOff