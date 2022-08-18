const mongoose = require('mongoose')
const { Schema, model } = mongoose

const rubberduckSchema = new Schema({
  name: {
    type: Schema.Types.String,
    minLength: 3,
  },
  color: [Schema.Types.String],
  material: {
    type: Schema.Types.String,
    enum: ['wood', 'plastic', 'gold', 'iron'],
  },
  size: {
    type: Schema.Types.String,
    enum: ['XL', 'L', 'M', 'S'],
  },
  price: {
    type: Schema.Types.Number,
    required: true,
    min: 100,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'person',
  },
})

const RubberDuck = model('duck', rubberduckSchema)

module.exports = RubberDuck
