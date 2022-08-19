const express = require('express')
const app = express()

// Configure app
const setupApp = require('./config')
setupApp(app)

// Add custom error handling
const addErrorHandling = require('./error-handling')
addErrorHandling(app)

// Connect to database
require('./db')

// ROUTERS
const socksRouter = require('./routes/Socks.routes')
app.use('/socks', socksRouter)

// GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

module.exports = app
