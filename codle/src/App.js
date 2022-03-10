import './App.css';
import Login from './Components/Login';
import GamePlay from './GamePlay';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import React, { useState } from 'react';


function App() {
  const [userName, setUserName] = useState('default')
  const [sessionScore, setSessionScore] = useState(0)
  const [lifetimeScore, setLifetimeScore] = useState(0)
  const [auth, setAuth] = useState(true)


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setUserName={setUserName} setSessionScore={setSessionScore} setLifetimeScore={setLifetimeScore} setAuth={setAuth} />} />
        <Route exact path="/game-play" element={<GamePlay userName={userName} sessionScore={sessionScore} lifetimeScore={lifetimeScore} auth={auth} />} />
     </Routes>
    </div>
  );
}

export default App;
