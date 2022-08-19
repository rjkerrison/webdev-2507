const express = require('express')
// import the 'module.exports' from the file
const socksRouter = require('./routes/Socks.routes')

const PORT = 3000
const app = express()

app.use('/socks', socksRouter)

// GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log('We are listening on port', PORT)
})
