import './App.css';
import Login from './Components/Login/Login';
import GamePlay from './GamePlay';
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from './Components/Header/Header';
import React, { useState, useEffect } from 'react';


function App() {
  const [userName, setUserName] = useState('default')
  const [sessionScore, setSessionScore] = useState(0)
  const [lifetimeScore, setLifetimeScore] = useState(0)
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')
  const [username, setUsername] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)
  const [successfulLogin, setSuccessfulLogin] = useState(true)
  const [currentUserObj, setCurrentUserObj] = useState({})
  const [isScoreWin, setIsScoreWin] = useState(false)
  const [recentScores, setRecentScores] = useState([])

  let navigate = useNavigate()

  console.log(recentScores)

  function handleSignUpSubmit(e) {
    e.preventDefault()
    const newObj = {
        username: username,
        password: pwd, 
        difficulty: null,
        highscore: 0,
        ip_address: 'N/A'
    }
    fetch('http://localhost:9292/users', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(data => {
            setCurrentUserObj(data)
            setUserName(data.username)
            setLifetimeScore(0)
            fetchRecentScores(data)
        })
        setAuth(true)
        navigate('/game-play')
}

function fetchRecentScores(data) {
  fetch(`http://localhost:9292/users/${data.id}/recent`)
  .then(res => res.json())
  .then(data => setRecentScores(Object.values(data)))
}

function handleLogInSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(users => {
      const currentUser = users.filter(user => user.username === username && user.password === pwd)
      if(currentUser.length === 0) {
          setSuccessfulLogin(false)
      } else {
          setCurrentUserObj(currentUser[0])
          setUserName(currentUser[0].username)
          setLifetimeScore(currentUser[0].highscore)
          setAuth(true)
          setSuccessfulLogin(true)
          navigate('/game-play')
          fetchRecentScores(currentUser[0])
      }
    })
}

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(users => {
      const currentUser = users.filter(user => user.username === username && user.password === pwd)
          setCurrentUserObj(currentUser[0])
          setUserName(currentUser[0].username)
          setLifetimeScore(currentUser[0].highscore)
          
      }
    )
  }, [isScoreWin])


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login 
        setAuth={setAuth}
        username ={username}
        setIsNewUser={setIsNewUser}
        isNewUser={isNewUser}
        handleLogInSubmit={handleLogInSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
        pwd={pwd}
        setUsername={setUsername}
        setPwd={setPwd}
        successfulLogin={successfulLogin}
        />} />
        <Route exact path="/game-play" element={<GamePlay fetchRecentScores={fetchRecentScores} setIsScoreWin={setIsScoreWin} userName={userName} sessionScore={sessionScore} lifetimeScore={lifetimeScore} auth={auth} currentUserObj={currentUserObj} setSessionScore={setSessionScore} recentScores={recentScores} />} />
     </Routes>
    </div>
  );
}

export default App;
