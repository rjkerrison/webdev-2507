// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
const MONGO_URI = 'mongodb://localhost/sock-shop'

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo: ', err)
  })
