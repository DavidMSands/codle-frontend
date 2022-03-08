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

  function hideScore () {
    setHide(hide => !hide)
  }

  return (
    <div className="App">
      <Header />
      <button onClick={hideScore}>Hide</button>
      <GameBoard />
      {hide ? <Score /> : null }
      <Keyboard /> 
      <Footer /> 
    </div>
  );
}

export default App;
