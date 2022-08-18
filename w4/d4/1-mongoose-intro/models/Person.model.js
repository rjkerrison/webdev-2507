const mongoose = require('mongoose')
const { Schema, model } = mongoose

const personSchema = new Schema({
  name: Schema.Types.String,
  age: Schema.Types.Number,
})

const Person = model('person', personSchema)

module.exports = Person
