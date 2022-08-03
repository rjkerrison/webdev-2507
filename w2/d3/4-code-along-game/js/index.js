// Import the Game class
/**
 * * Selecting the elements on my HTML page
 */
const startButton = document.getElementById('start-button')
// Those next elements are exported
export const startScreen = document.getElementById('start-screen')
export const gameScreen = document.getElementById('game-screen')
export const endGameScreen = document.getElementById('endgame-screen')
export const headerElement = document.querySelector('header')
export const scoreElement = headerElement.querySelector('#score')
export const timerElement = headerElement.querySelector('#timer')
export const resetButton = document.getElementById('reset-game')
import Game from './Game.js'
startButton.addEventListener('click', startTheGame)
let game = null
/**
 * ! Let's start the game!
 */
function startTheGame() {
  if (!game) {
    game = new Game()
  }
  game.init()
}
