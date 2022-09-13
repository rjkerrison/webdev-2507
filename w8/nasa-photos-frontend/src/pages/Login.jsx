import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'

const Login = () => {
  const { theme } = useContext(ThemeContext)
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    // POST the username and password to the /auth/login

    const config = {
      method: 'post',
      baseURL: 'http://localhost:3000',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    }

    axios(config)
      .then((response) => {
        const jwt = response.data.token
        setToken(jwt)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className={theme}>
      <h2>LOGIN TO THE BEST WEBSITE EVER</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          placeholder="username"
          onChange={(event) =>
            setFormData({
              ...formData,
              username: event.target.value,
            })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
        />
        <input type="submit" value="Log In" />
      </form>
    </main>
  )
}

export default Login
