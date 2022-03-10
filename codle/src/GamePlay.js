import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState, useRef, useEffect } from 'react'
import Login from './Components/Login/Login';
import { useNavigate, Redirect } from "react-router-dom"

function GamePlay({ userName, sessionScore, lifetimeScore, auth, currentUserObj, setSessionScore, setIsWin }) {
  let navigate = useNavigate()

  useEffect(() => {
    if(auth === false) {
      navigate('/')
    }
  },[])
  
  const [modalStyle, setModalStyle] =useState('score-container1')
  const [isEnter, setIsEnter] = useState(false)
  const [wordOfTheDay, setWordOfTheDay] = useState('hello')
  const [wordOfTheDayId, setwordOfTheDayId] = useState(0)
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
    .then(wotd => {
      setwordOfTheDayId(wotd[0].id)
      setWordOfTheDay(wotd[0].game_word.toLowerCase())
    })
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
  const enterGuess = (keyClicked) => {
    if (keyClicked === "enter") {
      //potential TODO: validate users words before submitting in backen
      submit()
      setIsEnter(true)
    } else if (keyClicked.toLowerCase() === "backspace") {
      erase() 
      setIsEnter(false)
    } else if (keyClicked.toLowerCase() !== "enter") {
      publish(keyClicked)
      setIsEnter(false)
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


  function currentScore() {
    switch (round.current) {
      case 0:
        return 50;
      case 1:
        return 40;
      case 2:
        return 30;
      case 3:
        return 20;
      case 4:
        return 10;
      case 5:
        return 0;
      default:
        return "error"
    }
  }

  console.log(wordOfTheDayId)

  const win = () => {
    console.log(wordOfTheDayId)
    const newObj = {
      user_id: currentUserObj.id,
      word_id: wordOfTheDayId,
      session_score: currentScore(),
      guesses: round.current + 1 ,
      completed: true
    }
    fetch('http://localhost:9292/users' + `/${currentUserObj.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        highscore: lifetimeScore + currentScore(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));

    fetch('http://localhost:9292/scores', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        setSessionScore(currentScore())
        setIsWin(true)
  }

  

  const submit = () => {
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

    console.log(guesses[currentRound].join(""))
    if (guesses[currentRound].join("") === wordOfTheDay) {
      setMarkers(updatedMarkers)
      console.log(wordOfTheDayId)
      console.log(wordOfTheDay)
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
    // console.log(markers[gameRound][letterIndex])

    // console.log(guesses[round][index])
    round.current = currentRound + 1
    letterIndex.current = 0
  }

// LEFT OFF POINT: we need to pass down color as a prop to GameBoard so tile has access
// We may need to access index in addition to color

  return (
    <div className="App">
      <Header handleModalStyle={handleModalStyle} />
      <GameBoard guesses={guesses} colors={markers}/>
      <Keyboard pressedKey={pressedKey} guesses={guesses} colors={markers} isEnter={isEnter} modalStyle={modalStyle} round={round} wotd={wordOfTheDay}/> 
      <Score modalStyle={modalStyle} exitModal={exitModal} userName={userName} sessionScore={sessionScore} lifetimeScore={lifetimeScore} currentScore={currentScore} />
    </div>
  );
}

export default GamePlay;
