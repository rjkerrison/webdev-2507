const { model, Schema } = require("mongoose");

const catSchema = new Schema({
	name: String,
	url: String,
});

const Cat = model("Cats", catSchema);

module.exports = Cat;
