import './Reviews.css'

import axios from 'axios'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import AddReview from './AddReview'
import Review from './Review'
import { AuthContext } from '../contexts/AuthContext'

const getAverageRating = (reviews) => {
  const totalRating = reviews.reduce(
    (prevValue, review) => prevValue + review.rating,
    0
  )
  return totalRating / reviews.length
}

const Reviews = ({ photoId }) => {
  const [allReviews, setAllReviews] = useState([])
  const { isLoggedIn } = useContext(AuthContext)

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
    <div className="reviews">
      {/* When averageRating is NaN, we don't show this paragraph */}
      {!!averageRating && (
        <p className="average">Average rating: {averageRating.toFixed(2)}</p>
      )}
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
      {isLoggedIn && (
        <AddReview photoId={photoId} updateReviewsList={updateReviewsList} />
      )}
    </div>
  )
}

export default Reviews
