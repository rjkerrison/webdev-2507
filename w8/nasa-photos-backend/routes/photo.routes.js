const express = require('express')
const { isValidObjectId } = require('mongoose')
const { isAuthenticated } = require('../middleware/middlewares')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const Photo = require('../models/Photo.model')
const Review = require('../models/Review.model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const { page = 1 } = req.query

  const photos = await MarsRoverPhoto.find()
    .sort('-sol')
    .skip((page - 1) * 10)
    .limit(10)
    .populate('camera rover')
  res.json({ photos })
})

router.get('/:id', async (req, res, next) => {
  const photo = await Photo.findById(req.params.id)
  res.json(photo)
})

router.get('/:id/reviews', async (req, res, next) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      res.status(400).json({ message: 'Invalid photo id' })
      return
    }

    const reviews = await Review.find({ photo: req.params.id })
    res.json({ reviews })
  } catch (error) {
    next(error)
  }
})

router.post('/:id/reviews', async (req, res, next) => {
  const review = await Review.create({ photo: req.params.id, ...req.body })
  res.json(review)
})

module.exports = router
