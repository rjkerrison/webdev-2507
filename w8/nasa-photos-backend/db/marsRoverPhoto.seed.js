const { default: mongoose } = require('mongoose')
const MarsRover = require('../models/MarsRover.model')
const MarsRoverCamera = require('../models/MarsRoverCamera.model')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const photos = require('./marsRoverPhoto.json')

const getMongooseId = async (model, { id, ...object }) => {
  const found = await model.findOne({ nasaId: id })
  if (found) {
    return found._id
  } else {
    const created = await model.create(object)
    return created._id
  }
}

const convertToMarsRoverPhoto = async ({
  img_src,
  id,
  camera,
  rover,
  ...photo
}) => {
  const roverId = await getMongooseId(MarsRover, rover)
  const cameraId = await getMongooseId(MarsRoverCamera, camera)

  return {
    url: img_src,
    nasaId: id,
    rover: roverId,
    camera: cameraId,
    ...photo,
  }
}

;(async () => {
  await require('./')

  await MarsRoverPhoto.deleteMany()
  const marsRoverPhotos = await Promise.all(photos.map(convertToMarsRoverPhoto))
  const result = await MarsRoverPhoto.create(marsRoverPhotos)

  console.log(`Created ${result.length} photos.`)
  console.log(`There are now ${await MarsRover.countDocuments()} rovers.`)
  console.log(
    `There are now ${await MarsRoverCamera.countDocuments()} cameras.`
  )

  await mongoose.connection.close()
})()
