const { Schema } = require('mongoose')
const Photo = require('./Photo.model')

const marsRoverPhotoSchema = new Schema({
  id: {
    type: Schema.Types.Number,
  },
  sol: {
    type: Schema.Types.Number,
  },
  camera: {
    id: {
      type: Schema.Types.Number,
    },
    name: {
      type: Schema.Types.String,
    },
    rover_id: {
      type: Schema.Types.Number,
    },
    full_name: {
      type: Schema.Types.String,
    },
  },
  earth_date: {
    type: Schema.Types.Date,
  },
  rover: {
    id: {
      type: Schema.Types.Number,
    },
    name: {
      type: Schema.Types.String,
    },
    landing_date: {
      type: Schema.Types.Date,
    },
    launch_date: {
      type: Schema.Types.Date,
    },
    status: {
      type: Schema.Types.String,
    },
  },
})

const MarsRoverPhoto = Photo.discriminator(
  'MarsRoverPhoto',
  marsRoverPhotoSchema
)

module.exports = MarsRoverPhoto
