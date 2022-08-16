/**
 * npm install express
 */

/**
 * Require express
 */

const express = require('express')
const port = 3000

/**
 * Create the app from express
 */
const app = express()

app.use(express.json())

const indexRouter = require('./routes/index.routes')
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Server is rocking @ http://localhost:${port}`)
})
