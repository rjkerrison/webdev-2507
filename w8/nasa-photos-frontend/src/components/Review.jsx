import React from 'react'
import ReactStars from 'react-rating-stars-component'

import './Review.css'

const Review = ({ content, rating, username }) => {
  return (
    <div className="review">
      <p className="author">{username}</p>
      <div className="rating">
        <ReactStars
          count={5}
          value={rating}
          edit={false}
          activeColor="inherit"
          classNames={['star']}
        />
      </div>
      <p className="content">{content}</p>
    </div>
  )
}

export default Review
