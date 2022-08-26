// Cloudinary import
const cloudinary = require('cloudinary').v2
// Get the CloudinaryStorage from the modules
const { CloudinaryStorage } = require('multer-storage-cloudinary')
// Multer will read the request and display the req.body and req.file(s)
const multer = require('multer')

// Cloudinary config
cloudinary.config({
  /**
   * Do not forget those lines!
   * inside of your .env file
   */
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

// Cloudinary storage and options
const storage = new CloudinaryStorage({
  cloudinary,
  /**
   * Options, there are many !
   * https://cloudinary.com/documentation/image_transformations#landingpage
   */
  params: {
    allowed_formats: ['jpg', 'png'],
    folder: 'file-upload',
  },
})
// Export the storage
module.exports = multer({ storage })
