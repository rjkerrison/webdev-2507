import './PhotoBox.css'

import Reviews from './Reviews'
import Caption from './Caption'

const PhotoBox = ({ sol, date, camera, rover, url, _id }) => {
  return (
    <article className="photo-box">
      <div className="heading">
        <p title={camera.full_name}>📸 {camera.name}</p>
        <p>{rover.name} 🤖</p>
      </div>
      <picture>
        <img src={url} alt="shiny wheels" />
      </picture>
      <Caption rover={rover} date={date} sol={sol} />
      <Reviews photoId={_id} />
    </article>
  )
}

export default PhotoBox
