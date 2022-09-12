import './Caption.css'

import { useMemo } from 'react'
import { formatAs } from '../utils/formatDate'
import captions from './captions.json'

const { messages } = captions

const Caption = ({ date }) => {
  const message = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    []
  )

  return (
    <div className="caption">
      <p>
        {formatAs.date(date)} {formatAs.time(date)}
      </p>
      <p>{message}</p>
    </div>
  )
}

export default Caption
