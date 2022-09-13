import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import PhotoBox from '../components/PhotoBox'

const HomeFeed = () => {
  const [allPhotos, setAllPhotos] = useState([])
  const [scrollPage, setScrollPage] = useState(1)
  const [loadedPages, setLoadedPages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.title = `MarsRover | ${allPhotos.length} recent photos`
  }, [allPhotos])

  useEffect(() => {
    if (loadedPages.includes(scrollPage)) {
      return
    }

    setIsLoading(true)

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
        setTimeout(() => setIsLoading(false), 500)
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

    if (remainingScrolls < 0.1) {
      setScrollPage(loadedPages.at(-1) + 1)
    }
  }

  return (
    <>
      {isLoading ? <Loading /> : null}
      <main className="scrollable" onScroll={handleScroll}>
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
    </>
  )
}

export default HomeFeed
