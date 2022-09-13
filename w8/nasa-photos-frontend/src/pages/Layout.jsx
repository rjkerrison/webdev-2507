import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <h1>InstaMarsRoverGram</h1>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
