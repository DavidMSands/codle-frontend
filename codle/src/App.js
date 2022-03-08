import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Footer from './Components/Header/Footer';
import styled from "styled-components"

// TODO: refactor styled components into css


function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
      <Keyboard /> 
      <Footer /> 
    </div>
  );
}

export default App;
