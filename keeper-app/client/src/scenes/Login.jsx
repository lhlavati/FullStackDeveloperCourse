import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
      <div className="wrapper">
        <h1>LOGIN</h1>
        <form>
          <input type="text" placeholder='username' required/>
          <input type="text" placeholder='password' required/>
          <button>Login</button>
          <p>Error!</p>
          <span>Don't have an account? <Link to="/register">Register here</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login