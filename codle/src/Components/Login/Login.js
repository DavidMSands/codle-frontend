import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import LoginForm from './LoginForm'

function Login({ setAuth, username, setIsNewUser, handleLogInSubmit, handleSignUpSubmit, isNewUser, pwd, setPwd, setUsername, successfulLogin }) {

    useEffect(() => {
        setAuth(false)
    },[])

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