export default class Target {
  constructor(sectionSize, handleTargetClick) {
    // this.color = this.getRandomColor()
    this.type = null
    this.sectionSize = sectionSize
    this.HTMLElement = this.createTarget()
    this.hasBeenClicked = false
    this.handleTargetClick = handleTargetClick
  }

  /**
   * return a `rgb(r, g, b)` string Removed, because we prefer
   * to have fun with cats !
   */
  // getRandomColor() {
  //   const r = Math.random() * 255,
  //     g = Math.random() * 255,
  //     b = Math.random() * 255
  //   return `rgb(${r}, ${g}, ${b})`
  // }

  /**
   * Create the html Element and gives it the appropriate classes
   */
  createTarget() {
    const target = document.createElement('div')
    this.type = Math.random() - 0.7 > 0 ? 'bad' : 'nice'
    target.classList.add('target', this.type)
    target.style.top = Math.random() * (this.sectionSize - 100) + 'px'
    target.style.left = Math.random() * (window.innerWidth - 100) + 'px'
    target.addEventListener('click', () => this.handleClick())
    return target
    // target.style.backgroundColor = this.color
    // target.dataset.point = Math.floor(Math.random() * 10) - 5
  }
  handleClick() {
    this.hasBeenClicked = true
    this.handleTargetClick(this.type)
    this.remove()
  }

  remove() {
    this.HTMLElement.remove()
  }
}
