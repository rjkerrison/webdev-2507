import React from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {
  return (
    <ul>
      <li>
        <Link to="/countries/fr">France</Link>
      </li>
      <li>
        <Link to="/countries/es">España</Link>
      </li>
      <li>
        <Link to="/countries/it">Italia</Link>
      </li>
    </ul>
  )
}

export default Countries
