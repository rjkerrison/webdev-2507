import { useState } from 'react'
import './Grid.css'

import GridSquare from './GridSquare'

const Grid = ({ width = 3, height = 3 }) => {
  const [currentPlayer, setCurrentPlayer] = useState('padd')
  const [winner, setWinner] = useState('')
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
      setWinner(squares[0])
    }
  }

  const cells = []
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const index = i * width + j

      const setPlayer = () => {
        if (winner) {
          // somebody already won
          return
        }

        const newPlayerSquares = [...playerSquares]
        newPlayerSquares[index] = currentPlayer
        setPlayerSquares(newPlayerSquares)
        checkForWinner(newPlayerSquares)
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

  return (
    <>
      <h2>Current player: {currentPlayer}</h2>
      {winner && <p>{winner.toUpperCase()} has won!</p>}
      <div className="Grid">{cells}</div>
    </>
  )
}

export default Grid
