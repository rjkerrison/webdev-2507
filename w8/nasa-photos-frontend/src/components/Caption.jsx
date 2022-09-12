import { formatAs } from '../utils/formatDate'

const Caption = ({ date }) => {
  return (
    <div className="caption">
      <p>
        {formatAs.date(date)} {formatAs.time(date)}
      </p>
    </div>
  )
}

export default Caption
