import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState } from 'react'

function App() {
  const [hide, setHide] = useState(true)
  // const [guesses, setGuesses] = useState({
  //   0: Array.from({ length: 5}).fill(""),
  //   1: Array.from({ length: 5}).fill(""),
  //   2: Array.from({ length: 5}).fill(""),
  //   3: Array.from({ length: 5}).fill(""),
  //   4: Array.from({ length: 5}).fill(""),
  //   5: Array.from({ length: 5}).fill(""),
  // })
  const [guesses, setGuesses] = useState({
    0: Array.from("hello"),
    1: Array.from("squid"),
    2: Array.from({ length: 5}).fill(""),
    3: Array.from({ length: 5}).fill(""),
    4: Array.from({ length: 5}).fill(""),
    5: Array.from({ length: 5}).fill(""),
  })

  function pressedKey(keyClicked){
    console.log(keyClicked)
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
