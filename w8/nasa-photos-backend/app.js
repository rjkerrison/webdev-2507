const express = require('express')
const app = express()

require('./config')(app)
require('./db')

app.use('/', require('./routes/index'))
app.use('/photos', require('./routes/photo.routes'))

require('./error-handling')(app)

module.exports = app
