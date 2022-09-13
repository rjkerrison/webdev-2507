import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import Loading from '../Loading'

const IsPrivate = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext)

  // avoid navigation while loading
  if (isLoading) {
    return <Loading />
  }

  if (!isLoggedIn) {
    console.log('NAVIGATED TO LOGIN', { isLoggedIn, isLoading })
    return <Navigate to="/login" />
  }

  return children
}

export default IsPrivate
