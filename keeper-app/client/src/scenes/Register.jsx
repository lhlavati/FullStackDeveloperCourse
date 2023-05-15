import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <div className="wrapper">
        <h1>REGISTER</h1>
        <form>
          <input type="text" placeholder='username' required/>
          <input type="text" placeholder='email' required/>
          <input type="text" placeholder='password' required/>
          <button>Register</button>
          <p>Error!</p>
          <span>Have an account? <Link to="/login">Login here</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register