const { Schema } = require('mongoose')
const Photo = require('./Photo.model')
const MarsRover = require('./MarsRover.model')
const MarsRoverCamera = require('./MarsRoverCamera.model')

const marsRoverPhotoSchema = new Schema({
  nasaId: {
    type: Schema.Types.Number,
  },
  sol: {
    type: Schema.Types.Number,
  },
  earth_date: {
    type: Schema.Types.Date,
  },
  camera: {
    type: Schema.Types.ObjectId,
    ref: MarsRoverCamera,
  },
  rover: {
    type: Schema.Types.ObjectId,
    ref: MarsRover,
  },
})

const MarsRoverPhoto = Photo.discriminator(
  'MarsRoverPhoto',
  marsRoverPhotoSchema
)

module.exports = MarsRoverPhoto
