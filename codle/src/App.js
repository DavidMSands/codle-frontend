import './App.css';
import Header from './Components/Header/Header';
import GameBoard from './Components/GameBoard/GameBoard';
import Keyboard from './Components/Keyboard/Keyboard';
import Footer from './Components/Header/Footer';

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
