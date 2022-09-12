import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import PhotoBox from './components/PhotoBox'

function App() {
  const [allPhotos, setAllPhotos] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://localhost:3000/photos',
      headers: {},
    }

    axios(config)
      .then((response) => {
        const { photos } = response.data
        setAllPhotos(photos)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>InstaMarsRoverGram</h1>
      </header>
      <main>
        {allPhotos.map((photo) => {
          return (
            <PhotoBox
              key={photo._id}
              date={new Date(photo.earth_date)}
              {...photo}
              // spreading saves us from needing to
              // repeat ourselves when the prop keys match our object keys
              // _id={photo._id}
              // camera={photo.camera}
              // rover={photo.rover}
              // url={photo.url}
            />
          )
        })}
      </main>
    </div>
  )
}

export default App
