import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState, useRef } from 'react'

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
  // const [guesses, setGuesses] = useState({
  //   0: Array.from("hello"),
  //   1: Array.from("squid "),
  //   2: Array.from({ length: 5}).fill(""),
  //   3: Array.from({ length: 5}).fill(""),
  //   4: Array.from({ length: 5}).fill(""),
  //   5: Array.from({ length: 5}).fill(""),
  // })

  let letterIndex = useRef(0)
  let round = useRef(0)

  function pressedKey(keyClicked){
    // setGuesses(...guesses, keyClicked)
    enterGuess(keyClicked)
  }

  const enterGuess = (keyClicked) => {
    //this is the divert to publish or delete
    if (keyClicked.toLowerCase() === "backspace") {
      erase() 
    } else if (keyClicked.toLowerCase() !== "backspace") {
      publish(keyClicked)
    }
  }

  const publish = (keyClicked) => {
    const currentLetterIndex = letterIndex.current
    const currentRound = round.current

    setGuesses((prev) => {

      const newGuess = { ...prev }
      newGuess[currentRound][currentLetterIndex] = keyClicked
      return newGuess
    })
    letterIndex.current = currentLetterIndex + 1
  }

  function erase(){
    const currentLetterIndex = letterIndex.current
    const currentRound = round.current
    setGuesses((prev) => {

      const newGuess = { ...prev }
      newGuess[currentRound][currentLetterIndex - 1] = ""
      return newGuess
    })
    letterIndex.current = currentLetterIndex - 1
  
  }

  function hideScore () {
    setHide(hide => !hide)
  }

  return (
    <div className="App">
      <Header />
      <button onClick={hideScore}>Hide</button>
      <GameBoard guesses={guesses}/>
      {hide ? <Score /> : null }
      <Keyboard pressedKey={pressedKey} /> 
      <Footer /> 
    </div>
  );
}

export default App;
