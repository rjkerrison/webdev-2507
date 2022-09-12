import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import PhotoBox from './components/PhotoBox'

function App() {
  const [allPhotos, setAllPhotos] = useState([])
  const [scrollPage, setScrollPage] = useState(1)
  const [loadedPages, setLoadedPages] = useState([])

  useEffect(() => {
    if (loadedPages.includes(scrollPage)) {
      return
    }

    let config = {
      method: 'get',
      url: 'http://localhost:3000/photos',
      headers: {},
      params: { page: scrollPage },
    }

    axios(config)
      .then((response) => {
        if (loadedPages.includes(scrollPage)) {
          return
        }

        const { photos } = response.data
        setAllPhotos((current) => [...current, ...photos])
        setLoadedPages((current) => [...current, scrollPage])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [scrollPage, loadedPages])

  const handleScroll = (event) => {
    const { scrollTop, scrollTopMax, clientHeight } = event.target
    const remainingScrolls = (scrollTopMax - scrollTop) / clientHeight
    console.log({
      remainingScrolls,
      scrollTop,
      scrollTopMax,
      clientHeight,
      message: 'scroll',
    })

    if (remainingScrolls < 0.5) {
      setScrollPage(loadedPages.at(-1) + 1)
    }
  }

  return (
    <div className="App" onScroll={handleScroll}>
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
