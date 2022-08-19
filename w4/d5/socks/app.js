const express = require('express')

const PORT = 3000
const app = express()

// GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log('We are listening on port', PORT)
})
