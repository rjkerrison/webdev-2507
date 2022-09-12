import React from 'react'

const Review = ({ content, rating, username }) => {
  return (
    <>
      <p>{content}</p>
      <p>Rating: {rating}/5</p>
      <p>{username}</p>
    </>
  )
}

export default Review
