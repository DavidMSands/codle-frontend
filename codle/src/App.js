import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState, useRef, useEffect } from 'react'

const wordOfTheDay = 'hello'

function App() {
  const [hide, setHide] = useState(true)
  const [guesses, setGuesses] = useState({
    0: Array.from({ length: 5}).fill(""),
    1: Array.from({ length: 5}).fill(""),
    2: Array.from({ length: 5}).fill(""),
    3: Array.from({ length: 5}).fill(""),
    4: Array.from({ length: 5}).fill(""),
    5: Array.from({ length: 5}).fill(""),
  })
  const [markers, setMarkers] = useState({
    0: Array.from({ length: 5}).fill(""),
    1: Array.from({ length: 5}).fill(""),
    2: Array.from({ length: 5}).fill(""),
    3: Array.from({ length: 5}).fill(""),
    4: Array.from({ length: 5}).fill(""),
    5: Array.from({ length: 5}).fill(""),
  })

  let letterIndex = useRef(0)
  let round = useRef(0)

  function pressedKey(keyClicked){
    // setGuesses(...guesses, keyClicked)
    enterGuess(keyClicked)
  }
  const enterGuess = (keyClicked) => {
    //this is the divert to publish or delete
    if (keyClicked === "enter") {
      const validWord = wordOfTheDay //TODO: come back to get word of the day from fetch
      console.log(Array.isArray(validWord))
        if (Array.isArray(validWord)) {
          // submit()
          console.log(keyClicked)
        }
    } else if (keyClicked.toLowerCase() === "backspace") {
      erase() 
    } else if (keyClicked.toLowerCase() !== "enter") {
      publish(keyClicked)
    }
  }
  const publish = (keyClicked) => {
    const currentLetterIndex = letterIndex.current
    const currentRound = round.current

    // limitation for up to word length (5 characters)
    if (currentLetterIndex < 5) {
      setGuesses((prev) => {

        const newGuess = { ...prev }
        newGuess[currentRound][currentLetterIndex] = keyClicked
        return newGuess
      })
      letterIndex.current = currentLetterIndex + 1
    }
  }
  function erase(){
    const currentLetterIndex = letterIndex.current
    const currentRound = round.current
    
    if (currentLetterIndex != 0) {
      setGuesses((prev) => {

        const newGuess = { ...prev }
        newGuess[currentRound][currentLetterIndex - 1] = ""
        return newGuess
      })
      letterIndex.current = currentLetterIndex - 1
    }
  }
  function hideScore () {
    setHide(hide => !hide)
  }

  const submit = () => {
    console.log(markers)
    const currentRound = round.current
    const updatedMarkers = {...markers}
    const tempWord = wordOfTheDay.split("")

    // mark correct values and index with green
    tempWord.forEach((letter, index) => {
      const guessedLetter = guesses[round][index]

      if (guessedLetter === letter) {
        updatedMarkers[round][index] = "green"
        tempWord[index] = "" //test what this is doing
      }
    })

    // mark correct values with wrong index in yellow
    tempWord.forEach((letter, index) => {
      const guessedLetter = guesses[round][index]

      if (tempWord.includes(guessedLetter) && index !== tempWord.index(guessedLetter)) {
        updatedMarkers[round][index] = "yellow"
        tempWord[tempWord.indexOf(guessedLetter)] = "" //test what this does
      }
    })

    setMarkers(updatedMarkers)
    round.current = currentRound + 1
    console.log(markers)
  }

// LEFT OFF POINT: we need to pass down color as a prop to GameBoard so tile has access
// We may need to access index in addition to color

  return (
    <div className="App">
      <Header />
      <button onClick={hideScore}>Hide</button>
      <GameBoard guesses={guesses} color={markers[round][index]}/>
      {hide ? <Score /> : null }
      <Keyboard pressedKey={pressedKey} /> 
      <Footer /> 
    </div>
  );
}

export default App;
