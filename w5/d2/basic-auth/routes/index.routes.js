const router = require('express').Router()
const usersRouter = require('./users.routes')
const messageRouter = require('./message.routes')
/* GET home page */
router.get('/', (req, res, next) => {
  res.json({ message: 'Everything is fine so far!' })
})

router.use('/users', usersRouter)
router.use('/message', messageRouter)

module.exports = router
