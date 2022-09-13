import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'

const Layout = () => {
  const { setTheme } = useContext(ThemeContext)
  const { logout, isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <header className="App-header">
        <h1>InstaMarsRoverGram</h1>
        {isLoggedIn ? (
          <>
            <Link to="/account">My Account</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login to your account</Link>
        )}

        <Link to="/">Home</Link>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('light')}>light</button>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
