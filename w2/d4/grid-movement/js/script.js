const zodiacSignsArray = [
  'aquarius',
  'aries',
  'cancer',
  'capricorn',
  'gemini',
  'leo',
  'libra',
  'pisces',
  'sagittarius',
  'scorpio',
  'taurus',
  'virgo',
]
const gridElement = document.querySelector('.game-grid')
const startButton = document.getElementById('start-game')
const scoreElement = document.getElementById('score')
const prize = document.getElementById('prize')

const gridColumns = 10
const gridRows = 10
const cells = []
let currentPosition = 20
let score = 0

startButton.addEventListener('click', startTheGame)

// 1. What do we need to do when starting the game ?
function startTheGame() {
  createTheGrid()
}

function createTheGrid() {
  for (let i = 0; i < gridColumns * gridRows; i++) {
    const div = document.createElement('div')
    div.classList.add('cell')
    div.dataset.index = i
    gridElement.append(div)
    cells.push(div)
  }
  displayPlayer()
  generateZodiac()
}

// 2. How could we show the player?

function displayPlayer() {
  const myPosition = cells[currentPosition]
  console.log(myPosition)
  myPosition.classList.add('player')
}

// 3. How can we move the player on the grid?

document.addEventListener('keydown', (event) => {
  console.log('I just pressed: ', event.key)

  switch (event.key) {
    case 'ArrowUp':
      movePlayer(currentPosition - gridColumns)
      break
    case 'ArrowDown':
      movePlayer(currentPosition + gridColumns)
      break
    case 'ArrowLeft':
      if (currentPosition % 10 !== 0) {
        movePlayer(currentPosition - 1)
      }
      break
    case 'ArrowRight':
      if ((currentPosition + 1) % 10 !== 0) {
        movePlayer(currentPosition + 1)
      }
      break
  }
})

// Receive the newPosition , we need to remove the player from it's current position
// (Need to remove the player class)
function movePlayer(newPosition) {
  if (newPosition < 0 || newPosition > 99) {
    return console.error('Invalid Move!')
  }

  removePlayer()
  currentPosition = newPosition
  displayPlayer()

  console.log(cells[currentPosition])
  if (isItASign(cells[currentPosition])) {
    cells[currentPosition].className = 'cell player'
    score += 10
    scoreElement.textContent = score
    if (score === 120) {
      winTheGame()
    }
  }
}

function removePlayer() {
  cells[currentPosition].classList.remove('player')
}
// 4. How can we display and place all of the zodiac signs?

function isItASign(cell) {
  return cell.classList.contains('sign')
}

function generateZodiac() {
  const copyOfCells = [...cells]
  copyOfCells.splice(currentPosition, 1)

  zodiacSignsArray.forEach((zodiacName) => {
    const index = Math.floor(Math.random() * copyOfCells.length)
    copyOfCells[index].classList.add(zodiacName, 'sign')
    copyOfCells.splice(index, 1)
  })
}

// 5. What should happen when we "walk on" a zodiac sign?

// 6. When do we win?

function winTheGame() {
  prize.classList.toggle('hidden')
}
