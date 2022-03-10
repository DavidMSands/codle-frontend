import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState, useRef, useEffect } from 'react'


function App() {
  const [wordOfTheDay, setWordOfTheDay] = useState('words')
  const [modalStyle, setModalStyle] =useState('score-container1')
  const [isEnter, setIsEnter] = useState(false)
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

  useEffect(() => {
    fetch('http://localhost:9292/word_otd')
    .then(r => r.json())
    .then(wod => setWordOfTheDay(wod[0].game_word.toLowerCase()))
  }, [])

  function handleModalStyle() {
      setModalStyle('score-container2')
  }

  function exitModal() {
    setModalStyle('score-container1')
  }

  let letterIndex = useRef(0)
  let round = useRef(0)

  function pressedKey(keyClicked){
    // setGuesses(...guesses, keyClicked)
    enterGuess(keyClicked)
  }
  function enterGuess(keyClicked) {
    if (keyClicked === "enter") {
      //potential TODO: validate users words before submitting in backend
      submit()
      setIsEnter(true)
    } else if (keyClicked.toLowerCase() === "backspace") {
      erase()
      setIsEnter(false) 
    } else {
      publish(keyClicked)
      setIsEnter(false)
    }
  }
  function publish(keyClicked) {
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
  function erase() {
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

  function win() {
    // document.removeEventListener('keyup', handleKeyUp)
    console.log('need to remove EL and open modal (david?)')
  }

  // TODO: enter key versus keyboard key use previous state
  function submit() {
    const currentRound = round.current
    const updatedMarkers = {...markers}
    const tempWord = wordOfTheDay.split("")
    const leftOverIndices = []

    // mark correct values and index with green
    tempWord.forEach((letter, index) => {
      const guessedLetter = guesses[currentRound][index]

      if (guessedLetter === letter) {
        updatedMarkers[currentRound][index] = "#6aaa64" //green
        tempWord[index] = "" //empty index before each iteration
      } else {
        leftOverIndices.push(index)
      }
    })

    if (guesses[currentRound].join("") === wordOfTheDay) {
      setMarkers(updatedMarkers)
      win()
      return
    }

    // mark correct values with wrong index in yellow
    if (leftOverIndices.length) {
      leftOverIndices.forEach(index => {
        const guessedLetter = guesses[currentRound][index]
        const correctLetterPosition = tempWord.indexOf(guessedLetter)

        if (tempWord.includes(guessedLetter) && correctLetterPosition !== index) {
          updatedMarkers[currentRound][index] = "#e4bc3f"
          tempWord[correctLetterPosition] = ""
        } else {
          updatedMarkers[currentRound][index] = "#808080"
          tempWord[index] = ""
        }
      })

    } 
    setMarkers(updatedMarkers)
    round.current = currentRound + 1
    letterIndex.current = 0
  }

  return (
    <div className="App">
      <Header handleModalStyle={handleModalStyle} />
      <GameBoard guesses={guesses} colors={markers}/>
      <Keyboard pressedKey={pressedKey} guesses={guesses} colors={markers} wotd={wordOfTheDay} round={round} modalStyle={modalStyle} isEnter={isEnter}/> 
      <Score modalStyle={modalStyle} exitModal={exitModal} />
      <Footer /> 
    </div>
  );
}

export default App;
