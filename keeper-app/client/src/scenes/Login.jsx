import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.js'

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const {login} = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch(err) {
      setError(err.response.data)
    }    
  }

  return (
    <div className="auth">
      <div className="wrapper">
        <h1>LOGIN</h1>
        <form>
          <input type="text" placeholder='username' name='username' onChange={handleChange} required/>
          <input type="password" placeholder='password' name='password' onChange={handleChange} required/>
          <button onClick={handleSubmit}>Login</button>
          {err &&<p>{err}</p>}
          <span>Don't have an account? <Link to="/register">Register here</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login