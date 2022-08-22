const { Schema, model } = require('mongoose')

// define the schema
const sockSchema = new Schema({
  size: Schema.Types.Number,
  colour: {
    type: Schema.Types.String,
    enum: ['red', 'yellow', 'green', 'white', 'purple'],
  },
  subtype: {
    type: Schema.Types.String,
    enum: ['football', 'ankle', 'toe', 'knee-high', 'ordinary'],
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  brand: Schema.Types.String,
  fabric: Schema.Types.String,
  foot: {
    type: Schema.Types.String,
    required: true,
    enum: ['left', 'right', 'other'],
  },
  price: Schema.Types.Number,
})

// declare the model
const Sock = model('Sock', sockSchema)

// export the model
module.exports = Sock
