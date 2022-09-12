const { Schema, model } = require('mongoose')
const MarsRover = require('./MarsRover.model')

const marsRoverCameraSchema = new Schema({
  nasaId: {
    type: Schema.Types.Number,
  },
  name: {
    type: Schema.Types.String,
  },
  rover: {
    type: Schema.Types.ObjectId,
    ref: MarsRover,
  },
  full_name: {
    type: Schema.Types.String,
  },
})

const MarsRoverCamera = model('MarsRoverCamera', marsRoverCameraSchema)

module.exports = MarsRoverCamera
