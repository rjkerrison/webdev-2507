const { Schema, model } = require('mongoose')

const marsRoverSchema = new Schema({
  nasaId: {
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
})

const MarsRover = model('MarsRover', marsRoverSchema)

module.exports = MarsRover
