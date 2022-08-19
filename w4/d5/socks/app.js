const express = require('express')
const mongoose = require('mongoose')
// import the 'module.exports' from the file
const socksRouter = require('./routes/Socks.routes')

const PORT = 3000
const app = express()

// MIDDLEWARE
// add JSON reading capabilities
app.use(express.json())

// ROUTERS
app.use('/socks', socksRouter)

// GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log('We are listening on port', PORT)
})

mongoose.connect('mongodb://localhost:27017/sock-shop', () => {
  console.log('Connected to Database')
})
