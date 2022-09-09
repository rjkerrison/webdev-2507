import React from 'react'
import { Link } from 'react-router-dom'

const ApartmentCard = ({ apartment }) => {
  return (
    <div key={apartment._id} className="card">
      <img src={apartment.img} alt="apartment" />
      <Link to={`/apartments/${apartment._id}`}>
        <h3>{apartment.title}</h3>
      </Link>
      <p>Price: {apartment.pricePerDay}</p>
    </div>
  )
}

export default ApartmentCard
