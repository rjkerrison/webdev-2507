const { default: mongoose } = require('mongoose')
const MarsRover = require('../models/MarsRover.model')
const MarsRoverCamera = require('../models/MarsRoverCamera.model')
const MarsRoverPhoto = require('../models/MarsRoverPhoto.model')
const Review = require('../models/Review.model')
const { photos } = require('./marsRoverPhoto.json')
const { getRecentPhotos } = require('./readManifests')

const getMongooseId = async (model, { id, ...object }) => {
  const found = await model.findOne({ nasaId: id })
  if (found) {
    return found._id
  } else {
    let { rover } = object
    if (rover && Number.isInteger(parseInt(rover))) {
      console.log('ROVER TIME', rover)
      // id is a nasaId
      const found = await MarsRover.findOne({ nasaId: rover })
      if (found) {
        console.log('FOUND HIM!', found)
        rover = found._id
      }
    }

    const created = await model.create({ ...object, nasaId: id, rover })
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
      // A little conversion
      const { rover_id: rover, ...values } = photo[key]
      mapping[photo[key].id] = { ...values, rover }
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

const createPhotosInDatabase = async (photos) => {
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
}

;(async () => {
  await require('./')

  await Review.deleteMany()
  await MarsRover.deleteMany()
  await MarsRoverCamera.deleteMany()
  await MarsRoverPhoto.deleteMany()

  createPhotosInDatabase(photos)

  for (const rover of ['perseverance', 'curiosity', 'opportunity', 'spirit']) {
    for await (const photos of getRecentPhotos(rover)) {
      await createPhotosInDatabase(photos)
    }
  }

  console.log(`There are now ${await MarsRover.countDocuments()} rovers.`)
  console.log(
    `There are now ${await MarsRoverCamera.countDocuments()} cameras.`
  )
  console.log(`There are now ${await MarsRoverPhoto.countDocuments()} photos.`)

  await mongoose.connection.close()
  return
})()
