const { default: mongoose } = require('mongoose')
const MarsRover = require('../models/MarsRover.model')
const MarsRoverCamera = require('../models/MarsRoverCamera.model')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const { photos } = require('./marsRoverPhoto.json')

const getMongooseId = async (model, { id, ...object }) => {
  const found = await model.findOne({ nasaId: id })
  if (found) {
    return found._id
  } else {
    const created = await model.create(object)
    return created._id
  }
}

const convertToMarsRoverPhoto = async (
  { img_src, id, camera, rover, ...photo },
  dbRovers,
  dbCameras
) => {
  return {
    url: img_src,
    nasaId: id,
    rover: dbRovers[rover.id],
    camera: dbCameras[camera.id],
    ...photo,
  }
}

const getReducer = (key) => {
  return (mapping, photo) => {
    if (!mapping[photo[key].id]) {
      mapping[photo[key].id] = photo[key]
    }
    return mapping
  }
}

const getNasaIdDbMapping = async (model, objects) => {
  return Object.fromEntries(
    await Promise.all(
      Object.values(objects).map(async (o) => [
        o.id,
        await getMongooseId(model, o),
      ])
    )
  )
}

;(async () => {
  await require('./')

  await MarsRover.deleteMany()
  await MarsRoverCamera.deleteMany()
  await MarsRoverPhoto.deleteMany()

  const rovers = photos.reduce(getReducer('rover'), {})
  const cameras = photos.reduce(getReducer('camera'), {})

  console.log(rovers, cameras)

  const dbRovers = await getNasaIdDbMapping(MarsRover, rovers)
  const dbCameras = await getNasaIdDbMapping(MarsRoverCamera, cameras)

  console.log(dbRovers, dbCameras)

  const marsRoverPhotos = await Promise.all(
    photos.map((photo) => convertToMarsRoverPhoto(photo, dbRovers, dbCameras))
  )
  const result = await MarsRoverPhoto.create(marsRoverPhotos)

  console.log(`Created ${result.length} photos.`)
  console.log(`There are now ${await MarsRover.countDocuments()} rovers.`)
  console.log(
    `There are now ${await MarsRoverCamera.countDocuments()} cameras.`
  )

  await mongoose.connection.close()
  return
})()
