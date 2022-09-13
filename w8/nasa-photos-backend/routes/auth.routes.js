const router = require('express').Router()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jsonWebToken = require('jsonwebtoken')
const salt = 10

router.post('/signup', async (req, res, next) => {
  const { username, email, password, phoneNumber } = req.body
  if (!password || !username) {
    return res
      .status(400)
      .json({ message: 'Please provide a password and username.' })
  }
  try {
    // const foundUser = await User.findOne({username: username})
    const foundUser = await User.findOne({ username })
    if (foundUser) {
      return res.status(400).json({
        message: 'Username already exists',
      })
    }
    const generatedSalt = await bcrypt.genSalt(salt)
    const hashedPassword = await bcrypt.hash(password, generatedSalt)

    const newUser = {
      username,
      email,
      phoneNumber,
      password: hashedPassword,
    }
    const createdUser = await User.create(newUser)
    res.status(201).json(createdUser)
  } catch (error) {
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide username and password' })
  }
  try {
    const foundUser = await User.findOne({ username }).select('password')
    if (!foundUser) {
      return res.status(400).json({ message: 'wrong credentials' })
    }

    const matchingPassword = await bcrypt.compare(password, foundUser.password)
    if (!matchingPassword) {
      return res.status(400).json({ message: 'wrong credentials' })
    }

    const payload = { username }
    const token = jsonWebToken.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: '1h',
    })

    res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
})

module.exports = router
