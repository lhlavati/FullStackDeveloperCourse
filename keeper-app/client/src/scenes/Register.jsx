import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/register", inputs)
      console.log(res);
    } catch(err) {
      console.log(err);
    }    
  }
  
  return (
    <div className="auth">
      <div className="wrapper">
        <h1>REGISTER</h1>
        <form>
          <input type="text" placeholder='username' name='username' onChange={handleChange} required/>
          <input type="email" placeholder='email' name='email' onChange={handleChange} required/>
          <input type="password" placeholder='password' name='password' onChange={handleChange} required/>
          <button onClick={handleSubmit}>Register</button>
          <p>Error!</p>
          <span>Have an account? <Link to="/login">Login here</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register