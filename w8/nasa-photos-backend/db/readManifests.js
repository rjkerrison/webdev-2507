const axios = require('axios')

const baseURL = 'https://api.nasa.gov/mars-photos/api/v1'
const apiKey = 'DEMO_KEY'

const readManifest = async (roverName) => {
  const url = `/manifests/${roverName}`
  const config = {
    baseURL,
    url,
    // my least favourite thing about axios is that the query is called 'params'
    params: {
      api_key: apiKey,
    },
  }

  try {
    const {
      data: { photo_manifest: manifest },
    } = await axios(config)

    const { max_date: maxDate, photos, name } = manifest

    return {
      name,
      maxDate,
      photos,
    }
  } catch (error) {
    console.log(`Failed to get manifest with config:`, config)
    console.error(error.response.data.error)
    return {}
  }
}

const getRecentPhotos = async function* (roverName) {
  // Strange naming from the NASA MarsRover API
  const { photos: days } = await readManifest(roverName)
  if (!days || days.length === 0) {
    return
  }

  for (let i = 0; i < 5; i++) {
    const { earth_date } = days.pop()

    const config = {
      baseURL,
      url: `/rovers/${roverName}/photos`,
      params: { earth_date, api_key: apiKey },
    }

    try {
      const {
        data: { photos },
      } = await axios(config)
      console.log(`Found ${photos.length} photos on ${earth_date}.`)
      yield photos
    } catch (error) {
      console.log(`Failed to get photos with config:`, config)
      console.error(error.response.data.error)
      throw 'failing quickly to save api calls'
    }
  }
}

module.exports = { readManifest, getRecentPhotos }
