import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import LoginForm from './LoginForm'

function Login({ setUserName, setSessionScore, setLifetimeScore, setAuth}) {
    const [pwd, setPwd] = useState('')
    const [username, setUsername] = useState('')
    const [isNewUser, setIsNewUser] = useState(false)
    const [successfulLogin, setSuccessfulLogin] = useState(true)
    const [currentUserObj, setCurrentUserObj] = useState({})

    console.log(username)

    let navigate = useNavigate()
    
    useEffect(() => {
        setAuth(false)
    },[])

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
                
            })
            setAuth(true)
            navigate('/game-play')
    }

    useEffect(() => {
        fetch('http://localhost:9292/users' + `/${currentUserObj.id}`)
        .then(res => res.json())
        .then(users => {
          setSessionScore(users.scores[0].session_score)
        })
    }, [currentUserObj])

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
          }
        })
    }

    function handleNewUser() {
        setIsNewUser(isNewUser => !isNewUser)
    }
    

  return (
    <div id='login'>
        <div id='header-container-login'>
           <h1>Codle</h1>
           <hr id='login-hr'/>
        </div>
        <LoginForm 
        isNewUser={isNewUser}
        handleLogInSubmit={handleLogInSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
        pwd={pwd}
        username={username}
        setUsername={setUsername}
        setPwd={setPwd}
        successfulLogin={successfulLogin}
        />
        {isNewUser ? <p onClick={handleNewUser} className='login-text'>Already created an account?</p> : <p onClick={handleNewUser} className='login-text'>Don't have an account?</p>}
    </div>
  )
}

export default Login