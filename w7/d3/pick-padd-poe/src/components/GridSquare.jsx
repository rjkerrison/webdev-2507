import { useState } from 'react'
import './GridSquare.css'

const GridSquare = ({ currentPlayer = 'padd' }) => {
  const [player, setPlayer] = useState('')
  const classNames = ['GridSquare']

  if (player) {
    classNames.push(player)
  }

  const handleClick = () => {
    if (player) {
      // no need to set a player if we already have one
      return
    }

    setPlayer(currentPlayer)
  }

  return <div onClick={handleClick} className={classNames.join(' ')}></div>
}

export default GridSquare
