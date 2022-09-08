import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import './Layout.css'

const Layout = () => {
  return (
    <>
      <header>
        <p>This is a React router example</p>
        <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/countries">Countries</Link>&nbsp;
          <a href="/about">About (regular link)</a>
        </nav>
      </header>
      <main>
        {/* Outlet displays the element for the routes inside this current route */}
        <Outlet />
      </main>
      <footer>&copy; Robin 2022</footer>
    </>
  )
}

export default Layout
