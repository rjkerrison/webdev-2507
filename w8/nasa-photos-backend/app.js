const express = require('express')
const app = express()

require('./config')(app)
require('./error-handling')(app)
require('./db')

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

module.exports = app
