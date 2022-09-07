import { useState } from 'react'
import './GridSquare.css'

const GridSquare = ({
  player,
  setPlayer,
  currentPlayer = 'padd',
  toggleCurrentPlayer,
}) => {
  const handleClick = () => {
    if (player !== '') {
      // if player is already set to a real value
      // we don't need to do anything for this click
      return
    }

    // When clicking on a GridSquare, I want to see
    // the current player's icon in the square
    setPlayer(currentPlayer)

    // we need to switch the currentPlayer
    toggleCurrentPlayer()
  }

  return <div className={`GridSquare ${player}`} onClick={handleClick}></div>
}

export default GridSquare
