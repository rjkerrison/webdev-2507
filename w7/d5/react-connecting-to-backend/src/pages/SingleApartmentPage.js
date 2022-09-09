// src/pages/ApartmentsPage.js

import { useState, useEffect } from 'react'
import axios from 'axios'
import ApartmentCard from '../components/ApartmentCard'
import { useParams } from 'react-router-dom'

function SingleApartmentPage() {
  const [apartment, setApartment] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      .then((response) => {
        console.log('response.data', response.data)
        setApartment(response.data)
      })
  }, [id])

  return (
    <div>
      <h3>Single apartment page</h3>
      <ApartmentCard apartment={apartment} />
    </div>
  )
}

export default SingleApartmentPage
