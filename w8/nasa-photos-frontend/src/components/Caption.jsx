import './Caption.css'

import { useContext, useMemo } from 'react'
import { formatAs } from '../utils/formatDate'
import captions from './captions.json'
import { ThemeContext } from '../contexts/ThemeContext'

const { messages } = captions

const Caption = ({ date, sol, rover }) => {
  const { theme, author } = useContext(ThemeContext)

  const message = useMemo(
    () => messages[Math.floor(Math.random() * messages.length)],
    []
  )

  return (
    <div className="caption">
      <p className="date">
        {formatAs.date(date)} (Sol {sol})
      </p>
      <p>
        <span className="author">{rover.name.toLowerCase()}</span> {message}
      </p>
      <p>
        The theme is {theme} and author is {author}
      </p>
    </div>
  )
}

export default Caption
