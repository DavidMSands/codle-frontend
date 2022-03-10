import React from 'react'

function LoginForm({ pwd, setPwd, username, setUsername, isNewUser, handleLogInSubmit, handleSignUpSubmit, successfulLogin }) {
  return (
    <div>
        {isNewUser
        ?<form onSubmit={(e) => handleSignUpSubmit(e)} id='sign-in' >
            <label for='create-username' class='login-text-2'>Create Username:</label><br/>
            <input type="text" name="create-username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
            <label for='create-pwd' class='login-text-2'>Create Password:</label><br/>
            <input type='password' name='create-pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
            <button onSubmit={handleSignUpSubmit} className='signin-button'>Sign Up</button>
         </form>
         :<form onSubmit={handleLogInSubmit} id='log-in' >
             {successfulLogin ? null : <p id='no-account'><i>You have not created an account. Please click "Don't have an account?" to sign up.</i></p>}
             <label for='username' class='login-text-2'>Please enter your username:</label><br/>
             <input type="text" name="username" placeholder='YellowSnowman334' value={username} required onChange={(e) => setUsername(e.target.value)}/><br/>
             <label for='pwd' class='login-text-2'>Please enter your password:</label><br/>
             <input type='password' name='pwd' placeholder='password...' value={pwd} required onChange={(e) => setPwd(e.target.value)}/><br/>
             <button onSubmit={handleLogInSubmit} className='login-button'>Log In</button>
          </form>}
    </div>
  )
}

export default LoginForm