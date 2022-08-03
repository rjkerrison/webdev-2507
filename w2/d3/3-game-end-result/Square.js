export default class Square {
  constructor(screenHeight) {
    this.screenHeight = screenHeight
    this.color = this.getRandomColor()
    this.score = this.getRandomScore()
    this.HTMLDiv = this.createDiv()
    this.isClicked = false
  }

  getRandomColor() {
    const availablesColors = ['red', 'green', 'yellow', 'blue']
    return availablesColors[Math.floor(Math.random() * availablesColors.length)]
  }

  getRandomScore() {
    return Math.round(Math.random() * 10 + 1)
  }
  createDiv() {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.background = this.color
    square.dataset.score = this.score
    square.style.top = this.getRandomTop()
    square.style.left = this.getRandomLeft()
    square.addEventListener('click', () => (this.isClicked = true))
    return square
  }

  getRandomTop() {
    return `${Math.random() * (this.screenHeight - 100)}px`
  }
  getRandomLeft() {
    return `${Math.random() * (window.screen.width - 100)}px`
  }

  remove() {
    this.HTMLDiv.remove()
  }
}
