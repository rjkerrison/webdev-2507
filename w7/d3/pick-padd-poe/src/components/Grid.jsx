import { useState } from 'react'
import './Grid.css'

import GridSquare from './GridSquare'

const Grid = ({ width = 3, height = 3 }) => {
  const [currentPlayer, setCurrentPlayer] = useState(0)

  const advanceToNextPlayer = () => {
    if (currentPlayer === 'padd') {
      setCurrentPlayer('poe')
    } else {
      setCurrentPlayer('padd')
    }
  }

  const cells = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      cells.push(
        <GridSquare
          advanceToNextPlayer={advanceToNextPlayer}
          currentPlayer={currentPlayer}
        />
      )
    }
  }

  return <div className="Grid">{cells}</div>
}

export default Grid
