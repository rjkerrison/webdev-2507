import {
  startScreen,
  gameScreen,
  endGameScreen,
  headerElement,
  scoreElement,
  timerElement,
  resetButton,
} from './index.js'
import Target from './Target.js'

class Game {
  constructor() {
    this.score = 0
    this.timer = 2

    this.targets = []
    this.intervalId = null
    this.timeoutId = null
    this.addResetListener()
  }
  /**
   * ! Launch the game
   */
  init() {
    this.showGameScreen()
    this.updateScore()
    this.updateTimer()
    this.createInterval()
    this.createSquares()
  }

  /**
   * ! Toggle screen states
   */
  showGameScreen() {
    startScreen.classList.toggle('hidden')
    gameScreen.classList.toggle('hidden')
    headerElement.classList.toggle('hidden')
  }

  updateTimer() {
    timerElement.textContent = this.timer
  }
  updateScore() {
    scoreElement.textContent = this.score
  }
  /**
   * ! Timeout to create targets at random times
   */
  createSquares() {
    const delay = Math.random() * 1000
    this.timeoutId = setTimeout(() => {
      /**
       * The target is an other class, we save it in
       *  an Array to keep track of it
       */
      const target = new Target(gameScreen.offsetHeight, (type) =>
        this.handleTargetClick(type)
      )
      this.targets.push(target)
      gameScreen.append(target.HTMLElement)
      this.createSquares()
    }, delay)
  }
  handleTargetClick(type) {
    if (type === 'bad') {
      this.score -= 2
    } else {
      this.score += 5
    }
    this.targets = this.targets.filter((target) => !target.hasBeenClicked)
    this.updateScore()
  }

  createInterval() {
    this.intervalId = setInterval(() => {
      this.updateTimer()
      if (this.timer === 0) {
        this.endGame()
      }
      this.timer--
    }, 1000)
  }

  endGame() {
    clearInterval(this.intervalId)
    clearTimeout(this.timeoutId)
    gameScreen.classList.toggle('hidden')
    endGameScreen.classList.toggle('hidden')
  }
  addResetListener() {
    resetButton.addEventListener('click', () => this.resetGame())
  }

  resetGame() {
    this.displayStartPage()
    this.score = 0
    this.timer = 10
    this.targets.forEach((target) => {
      target.remove()
    })
  }

  displayStartPage() {
    startScreen.classList.toggle('hidden')
    endGameScreen.classList.toggle('hidden')
    headerElement.classList.toggle('hidden')
  }
}

export default Game
