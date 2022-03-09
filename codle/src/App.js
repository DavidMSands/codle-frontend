import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Score from './Components/ScoreBoard/Score';
import Footer from './Components/Header/Footer';
import styled from "styled-components"
import { useState } from 'react'

function App() {
  const [modalStyle, setModalStyle] =useState('score-container1')

  function handleModalStyle() {
      setModalStyle('score-container2')
  }

  function exitModal() {
    setModalStyle('score-container1')
  }

  return (
    <div className="App">
      <Header handleModalStyle={handleModalStyle} />
      <GameBoard />
      <Score modalStyle={modalStyle} exitModal={exitModal} />
      <Keyboard /> 
      <Footer /> 
    </div>
  );
}

export default App;
