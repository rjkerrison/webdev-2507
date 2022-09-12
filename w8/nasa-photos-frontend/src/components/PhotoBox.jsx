import { formatAs } from '../utils/formatDate'
import Reviews from './Reviews'

const PhotoBox = ({ date, camera, rover, url, _id }) => {
  return (
    <article>
      <div className="heading">
        <p>
          {formatAs.date(date)} {formatAs.time(date)}
        </p>
        <p>{camera.name}</p>
        <p>{rover.name}</p>
      </div>
      <picture>
        <img src={url} alt="shiny wheels" />
      </picture>
      <Reviews photoId={_id} />
    </article>
  )
}

export default PhotoBox
