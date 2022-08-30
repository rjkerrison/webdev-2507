const {Schema, model} = require(`mongoose`);


const humanSchema = new Schema({
  name: Schema.Types.String,
  age: Schema.Types.Number
});


const Human = model(`Human`, humanSchema);

module.exports = Human;