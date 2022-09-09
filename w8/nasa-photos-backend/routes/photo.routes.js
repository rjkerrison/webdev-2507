const express = require('express')
const { isAuthenticated } = require('../middleware/middlewares')
const Photo = require('../models/Photo.model')
const Review = require('../models/Review.model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const photos = await Photo.find()
  res.json({ photos })
})

router.get('/:id', async (req, res, next) => {
  const photos = await Photo.findById(req.params.id)
  res.json({ photos })
})

router.get('/:id/reviews', async (req, res, next) => {
  const reviews = await Review.find({ photo: req.params.id })
  res.json({ reviews })
})

router.post('/:id/reviews', isAuthenticated, async (req, res, next) => {
  const review = await Review.create({ photo: req.params.id, ...req.body })
  res.json({ review })
})

module.exports = router
