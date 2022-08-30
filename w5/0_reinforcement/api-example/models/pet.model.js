const { Schema, model } = require(`mongoose`);


const petSchema = new Schema({
  name: Schema.Types.String,
  race: Schema.Types.String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: `Human`
  }
});


const Pet = model(`Pet`, petSchema);

module.exports = Pet;