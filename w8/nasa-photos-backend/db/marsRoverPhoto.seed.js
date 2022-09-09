const { default: mongoose } = require('mongoose')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const photos = require('./marsRoverPhoto.json')

const convertToPhoto = ({ img_src, ...photo }) => {
  return { url: img_src, ...photo }
}

;(async () => {
  await require('./')

  await MarsRoverPhoto.deleteMany()
  const result = await MarsRoverPhoto.create(photos.map(convertToPhoto))

  console.log(`Created ${result.length} photos.`)

  await mongoose.connection.close()
})()
