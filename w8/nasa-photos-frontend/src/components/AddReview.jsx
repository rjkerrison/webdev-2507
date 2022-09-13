import './AddReview.css'

import axios from 'axios'
import React, { useContext, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { AuthContext } from '../contexts/AuthContext'

const AddReview = ({ photoId, updateReviewsList }) => {
  const { token } = useContext(AuthContext)

  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const [isContentFieldOpen, setIsContentFieldOpen] = useState(false)

  const resetForm = () => {
    setRating(0)
    setText('')
    setIsContentFieldOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!token) {
      alert('YOU ARE NOT LOGGED IN')
      return
    }

    const data = {
      content: text,
      rating: rating,
    }

    const config = {
      method: 'post',
      url: `http://localhost:3000/photos/${photoId}/reviews`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then((response) => {
        console.log('response status', response.status)
        updateReviewsList()
        resetForm()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="add-review">
      <h2>Your review</h2>
      <form
        onSubmit={handleSubmit}
        className={isContentFieldOpen ? 'open' : 'closed'}
      >
        <label htmlFor="rating">Rating</label>
        <ReactStars
          count={5}
          value={rating}
          onChange={(value) => {
            setIsContentFieldOpen(true)
            setRating(value)
          }}
          size={24}
          activeColor="#00d7ff"
        />
        <label htmlFor="content">Content</label>
        <textarea
          className={isContentFieldOpen ? 'open' : 'closed'}
          name="content"
          id="content"
          cols="30"
          rows="1"
          placeholder="What did you think?"
          onChange={(event) => setText(event.target.value)}
          value={text}
        ></textarea>
        <div className="buttons">
          <input
            type="button"
            value="Cancel"
            className="cancel"
            onClick={resetForm}
          />
          <input type="submit" className="principal" value="Send" />
        </div>
      </form>
    </div>
  )
}

export default AddReview
