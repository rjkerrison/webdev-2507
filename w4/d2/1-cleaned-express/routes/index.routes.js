const express = require('express')
const router = express.Router()
const charactersRoute = require('./characters.routes')
router.get('/', (request, response) => {
  response.send('Hello there !')
})

router.use('/', charactersRoute)

/**
 * Here we specify what should be exported when we use require
 */
module.exports = router
