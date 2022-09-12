import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import AddReview from './AddReview'
import Review from './Review'

const getAverageRating = (reviews) => {
  const totalRating = reviews.reduce(
    (prevValue, review) => prevValue + review.rating,
    0
  )
  return totalRating / reviews.length
}

const Reviews = ({ photoId }) => {
  const [allReviews, setAllReviews] = useState([])

  const averageRating = useMemo(
    () => getAverageRating(allReviews),
    [allReviews]
  )

  const updateReviewsList = useCallback(() => {
    if (!photoId) {
      console.error('No photoId provided for Reviews')
      return
    }

    const config = {
      method: 'get',
      url: `http://localhost:3000/photos/${photoId}/reviews`,
      headers: {},
    }

    axios(config)
      .then((response) => {
        setAllReviews(response.data.reviews)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [photoId])

  useEffect(() => {
    updateReviewsList()
  }, [updateReviewsList])

  return (
    <>
      <p>Average rating: {averageRating}</p>
      <ul>
        {allReviews.map((review) => {
          console.log(review)

          return (
            <li>
              <Review {...review} />
            </li>
          )
        })}
      </ul>
      <AddReview photoId={photoId} updateReviewsList={updateReviewsList} />
    </>
  )
}

export default Reviews
