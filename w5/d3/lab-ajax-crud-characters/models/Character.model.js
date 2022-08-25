const {Schema, model, SchemaTypes} = require('mongoose')

const characterSchema = new Schema({
  name: SchemaTypes.String,
  occupation: SchemaTypes.String,
  weapon: SchemaTypes.String,
  cartoon: SchemaTypes.Boolean
})

const Character = model('Character', characterSchema)

module.exports = Character
