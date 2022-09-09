import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apartmentsUrl = 'https://ironbnb-m3.herokuapp.com/apartments'

function AddApartmentPage() {
  const [title, setTitle] = useState('')
  const [pricePerDay, setPricePerDay] = useState(1)
  // we ask kindly the react router dom useNavigate hook for a navigate function
  // that we can use to navigate to a different page of the app
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Create the body for the POST request
    const body = { title, pricePerDay }

    axios.post(apartmentsUrl, body).then((response) => {
      // Reset the state
      setTitle('')
      setPricePerDay(1)

      // Navigate to the `/` page while handling post request
      navigate('/')
    })
  }

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPricePerDay(e.target.value)}
          value={pricePerDay}
        />

        <input type="submit" value="Create Apartment" />
      </form>
    </div>
  )
}

export default AddApartmentPage
