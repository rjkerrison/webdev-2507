const router = require('express').Router()
const Cat = require('../models/Cat.model')
const isAuthenticated = require('../middlewares/isAuthenticated')

// Get the middleware to read and upload the images
const uploader = require('../config/cloudinary.config')
/**
 * All the routes here are prefixed with /api/cats
 */

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json(await Cat.find())
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  uploader.single(
    'image'
  ) /** the 'image' field is important as it should match the name of the field the image is located at (See postman) */,
  async (req, res, next) => {
    console.log(req.body)
    // The uploader will append the uploaded image under the `req.file` key.
    console.log(req.file)
    const { name } = req.body
    let catPic
    // Verify if there is a file, if there is, get the url (path) the uploader provided you with.
    if (req.file) {
      catPic = req.file.path
    }
    // Create the cat 😸
    const createdCat = await Cat.create({ name: name, url: catPic })
    res.status(201).json({ message: 'Cat created', cat: createdCat })
  }
)

module.exports = router
