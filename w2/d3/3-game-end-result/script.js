import Game from './Game.js'

const startButton = document.querySelector('#start-screen > h2')
export const startScreen = document.getElementById('start-screen')
export const gameScreen = document.getElementById('game-screen')
export const endGameScreen = document.getElementById('end-game-screen')
export const score = document.getElementById('points')
export const timer = document.getElementById('timer')
export const header = document.querySelector('header')

startButton.addEventListener('click', initGame)

function initGame() {
  const game = new Game()
  // console.log(game)
}
