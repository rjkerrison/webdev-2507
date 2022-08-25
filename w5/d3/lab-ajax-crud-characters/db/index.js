// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose")

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
	process.env.MONGODB_URI || "mongodb://localhost/ajax-crud-characters"
async function openConnection() {
	try {
		return await mongoose.connect(MONGO_URI)
	} catch (error) {
		console.error(`Error while connecting to the database: ${error.message}`)
	}
}

module.exports = openConnection
