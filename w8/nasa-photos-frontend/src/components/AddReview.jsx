import axios from 'axios'
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

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
    <div className="add-review">
      <h2>Add your review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating</label>
        <ReactStars
          count={5}
          onChange={(value) => setRating(value)}
          size={24}
          activeColor="#00d7ff"
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="2"
          onChange={(event) => setText(event.target.value)}
          value={text}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default AddReview
