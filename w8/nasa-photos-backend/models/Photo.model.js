const { Schema, model } = require('mongoose')

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

// define the schema
const photoSchema = new Schema({
  url: {
    type: Schema.Types.String,
    match: URL_REGEX,
    require: true,
  },
  filetype: {
    type: Schema.Types.String,
    enum: ['jpg', 'png'],
  },
})

const Photo = model('photo', photoSchema)

module.exports = Photo
