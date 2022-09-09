const express = require('express')
const Photo = require('../models/Photo.model')
const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const photos = await Photo.find()
  res.json({ photos })
})

module.exports = router
