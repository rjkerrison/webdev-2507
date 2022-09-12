import axios from 'axios'
import React, { useState } from 'react'

const AddReview = ({ photoId, updateReviewsList }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      content: text,
      rating: rating,
    }

    const config = {
      method: 'post',
      url: `http://localhost:3000/photos/${photoId}/reviews`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then((response) => {
        console.log('response status', response.status)
        updateReviewsList()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></textarea>
      <input type="submit" value="Send" />
    </form>
  )
}

export default AddReview
