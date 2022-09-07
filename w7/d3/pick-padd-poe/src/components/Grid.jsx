import { useState } from 'react'
import './Grid.css'

import GridSquare from './GridSquare'

const Grid = ({ width = 3, height = 3 }) => {
  const [currentPlayer, setCurrentPlayer] = useState('padd')
  const [playerSquares, setPlayerSquares] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ])

  const toggleCurrentPlayer = () => {
    setCurrentPlayer(currentPlayer === 'padd' ? 'poe' : 'padd')
  }

  const checkForWinner = (squares) => {
    if (
      squares[0] !== '' &&
      squares[0] === squares[1] &&
      squares[0] === squares[2]
    ) {
      alert(`player ${squares[0]} has won`)
    }
  }

  const cells = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const index = i * width + j

      const setPlayer = () => {
        const newPlayerSquares = [...playerSquares]
        newPlayerSquares[index] = currentPlayer
        setPlayerSquares(newPlayerSquares)
        checkForWinner(playerSquares)
      }

      cells.push(
        <GridSquare
          key={index}
          player={playerSquares[index]}
          setPlayer={setPlayer}
          currentPlayer={currentPlayer}
          toggleCurrentPlayer={toggleCurrentPlayer}
        />
      )
    }
  }

  console.log(cells)

  return <div className="Grid">{cells}</div>
}

export default Grid
