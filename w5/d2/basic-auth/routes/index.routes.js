const router = require('express').Router()
const usersRouter = require('./users.routes')
const messageRouter = require('./message.routes')
const authRoute = require('./auth.routes')
/* GET home page */

// router.use('/', consoleLogger)
router.get('/', consoleLogger, (req, res, next) => {
  console.log(req.students)
  res.redirect('/api/something')
})

router.get('/something', (req, res, next) => {
  res.send('Success!')
})

function consoleLogger(req, res, next) {
  req.students = ['Agash', 'Julien']
  next()
}

router.use('/users', usersRouter)
router.use('/message', messageRouter)
router.use('/auth', authRoute)

module.exports = router
