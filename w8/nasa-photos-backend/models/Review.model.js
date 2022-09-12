const { Schema, model } = require('mongoose')
const Photo = require('./Photo.model')
const User = require('./User.model')

const reviewSchema = new Schema({
  photo: {
    type: Schema.Types.ObjectId,
    ref: Photo,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  content: {
    type: Schema.Types.String,
  },
  rating: {
    type: Schema.Types.Number,
    min: 1,
    max: 5,
    validate: {
      validator: (value) => Number.isInteger(value),
      message: ({ value }) => `${value} is not an integer value`,
    },
  },
})

const Review = model('Review', reviewSchema)

module.exports = Review
