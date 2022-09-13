import './Caption.css'

import { useMemo } from 'react'
import { formatAs } from '../utils/formatDate'
import captions from './captions.json'

const { messages } = captions

const Caption = ({ date, sol, rover }) => {
  const message = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    []
  )

  return (
    <div className="caption">
      <p className="date">
        {formatAs.date(date)} {formatAs.time(date)} (Sol {sol})
      </p>
      <p>
        <b>{rover.name.toLowerCase()}</b> {message}
      </p>
    </div>
  )
}

export default Caption
