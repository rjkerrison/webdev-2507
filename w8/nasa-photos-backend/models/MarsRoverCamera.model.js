const { Schema, model } = require('mongoose')

const marsRoverCameraSchema = new Schema({
  nasaId: {
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
})

const MarsRoverCamera = model('MarsRoverCamera', marsRoverCameraSchema)

module.exports = MarsRoverCamera
