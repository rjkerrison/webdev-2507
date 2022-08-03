import Square from './Square.js'
import {
  startScreen,
  gameScreen,
  endGameScreen,
  score,
  timer,
  header,
} from './script.js'

export default class Game {
  constructor() {
    this.intervalId = null
    this.timeoutId = null
    this.time = 10
    this.score = 0
    this.intervalCounter = 0
    this.squares = []
    this.screenHeight = null
    this.init()
  }

  init() {
    this.displayGameScreen()
    this.createInterval()
    this.updateScore()
    this.updateTime()
    this.createSquare()
  }

  displayGameScreen() {
    startScreen.classList.add('hidden')
    gameScreen.classList.remove('hidden')
    header.classList.remove('hidden')
    this.screenHeight = gameScreen.offsetHeight
  }

  createInterval() {
    if (this.intervalId) {
      return
    }
    this.intervalId = setInterval(() => {
      if (this.time === 0) {
        this.endGame()
        return
      }
      this.checkIfClicked()

      this.intervalCounter++
      this.updateTime()
    }, 10)
  }

  updateTime() {
    if (this.intervalCounter === 100) {
      this.time--
      this.intervalCounter = 0
    }
    timer.textContent = this.time
  }
  updateScore(square) {
    if (square) {
      this.score += +square.HTMLDiv.dataset.score
      // console.log(square.HTMLDiv.dataset)
    }

    score.textContent = this.score
  }

  checkIfClicked() {
    for (let i = 0; i < this.squares.length; i++) {
      const square = this.squares[i]
      // console.log(square)
      if (square.isClicked) {
        this.updateScore(square)
        square.HTMLDiv.remove()
        this.squares.splice(i, 1)
      }
    }
  }

  createSquare() {
    const delay = Math.random() * 1000
    this.timeoutId = setTimeout(() => {
      const square = new Square(this.screenHeight)
      gameScreen.append(square.HTMLDiv)
      this.squares.push(square)
      this.createSquare()
    }, delay)
  }

  endGame() {
    clearInterval(this.intervalId)
    clearTimeout(this.timeoutId)
    gameScreen.classList.add('hidden')
    endGameScreen.classList.remove('hidden')
  }
}
