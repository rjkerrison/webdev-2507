const express = require('express')
const { isValidObjectId } = require('mongoose')
const MarsRoverCamera = require('../models/MarsRoverCamera.model')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const Review = require('../models/Review.model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const cameras = await MarsRoverCamera.find().limit(10)
  res.json({ cameras })
})

router.get('/:name', async (req, res, next) => {
  try {
    const camera = await MarsRoverCamera.findOne({ name: req.params.name })
    res.json(camera)
  } catch (error) {
    next(error)
  }
})

router.get('/:name/photos', async (req, res, next) => {
  try {
    const { name } = req.params
    const camera = await MarsRoverCamera.findOne({ name }).populate('rover')

    if (!camera) {
      res
        .status(404)
        .json({ message: `Could not find camera with name ${name}` })
      return
    }

    const photos = await MarsRoverPhoto.find({ camera: camera.id }).sort('-sol')
    res.json({ photos, camera })
  } catch (error) {
    next(error)
  }
})

module.exports = router
