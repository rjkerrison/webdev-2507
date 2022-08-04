const grid = document.getElementById('grid')
const cells = []

let playerPosition = 23

console.log(grid)

function addCell() {
  const cell = document.createElement('div')
  cell.classList.add('cell')
  grid.append(cell)

  // keep the cell for later
  cells.push(cell)
}

function add100Cells() {
  for (let i = 0; i < 100; i++) {
    addCell()
  }
}

add100Cells()

function displayPlayer() {
  cells[playerPosition].classList.add('player')
}

function hidePlayer() {
  cells[playerPosition].classList.remove('player')
}

displayPlayer()

function movePlayer(position) {
  hidePlayer()
  playerPosition = position
  displayPlayer()
}
