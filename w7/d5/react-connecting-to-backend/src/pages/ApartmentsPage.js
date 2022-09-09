// src/pages/ApartmentsPage.js

import { useState, useEffect } from 'react'
import axios from 'axios'
import ApartmentCard from '../components/ApartmentCard'

function ApartmentsPage() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    // <== ADD THE EFFECT
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((response) => {
        console.log('response.data', response.data)
        setApartments(response.data)
      })
  }, []) // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <ApartmentCard apartment={apartment} />
      ))}
    </div>
  )
}

export default ApartmentsPage
