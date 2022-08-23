const router = require('express').Router()
const User = require('../models/User.model')
/**
 * All the routes are prefixed with /users
 */

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.find()
    return res.status(200).json(allUsers)
  } catch (error) {
    next(error)
  }
})
router.post('/', async (req, res, next) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json({ message: `You should send a name!` })
  }
})
// router.patch('/')
// router.delete('/')

module.exports = router
