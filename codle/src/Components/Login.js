import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"

function Login({ setUserName, setSessionScore, setLifetimeScore, setAuth}) {
    const [pwd, setPwd] = useState('')
    const [username, setUsername] = useState('OllySleep')
    const [isNewUser, setIsNewUser] = useState(false)
    const [successfulLogin, setSuccessfulLogin] = useState('')
    const [currentUserObj, setCurrentUserObj] = useState({})
    

    let navigate = useNavigate()

    console.log(currentUserObj)
    
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
                console.log(data)
            })
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
              navigate('/game-play')
          }
        })
    }

    function handleNewUser() {
        setIsNewUser(isNewUser => !isNewUser)
    }
    
    // function LoginSignin() {
    //     if(isNewUser) {
    //        return (<form onSubmit={handleSignUpSubmit} id='sign-in' >
    //                  <label for='create-username' class='login-text-2'>Create Username:</label><br/>
    //                  <input type="text" autoFocus name="create-username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
    //                  <label for='create-pwd' class='login-text-2'>Create Password:</label><br/>
    //                  <input type='password' name='create-pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
    //                  <button onSubmit={handleSignUpSubmit}>Sign Up</button>
    //                </form>)
    //     } else {
    //        return (<form onSubmit={handleLogInSubmit} id='log-in' >
    //                  <label for='username' class='login-text-2'>Please enter your username:</label><br/>
    //                  <input type="text" name="username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
    //                  <label for='pwd' class='login-text-2'>Please enter your password:</label><br/>
    //                  <input type='password' name='pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
    //                  <button onSubmit={handleLogInSubmit}>Log In</button>
    //                </form>)
    //     }
    // }


  return (
    <div id='login'>
        <div id='header-container-login'>
           <h1>Codle</h1>
           <hr id='login-hr'/>
        </div>
        {isNewUser
        ?<form onSubmit={(e) => handleSignUpSubmit(e)} id='sign-in' >
            <label for='create-username' class='login-text-2'>Create Username:</label><br/>
            <input type="text" name="create-username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
            <label for='create-pwd' class='login-text-2'>Create Password:</label><br/>
            <input type='password' name='create-pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
            <button onSubmit={handleSignUpSubmit}>Sign Up</button>
         </form>
         :<form onSubmit={handleLogInSubmit} id='log-in' >
             <label for='username' class='login-text-2'>Please enter your username:</label><br/>
             <input type="text" name="username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
             <label for='pwd' class='login-text-2'>Please enter your password:</label><br/>
             <input type='password' name='pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
             <button onSubmit={handleLogInSubmit}>Log In</button>
          </form>}
        {isNewUser ? <p onClick={handleNewUser} className='login-text'>Already created an account?</p> : <p onClick={handleNewUser} className='login-text'>Don't have an account?</p>}
    </div>
  )
}

export default Login