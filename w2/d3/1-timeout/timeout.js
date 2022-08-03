// console.log('I am before the timeout')
// setTimeout(() => {
//   console.log('I am in the future')
// }, 2000)
// console.log('I am after the timeout (Or am I?)')

const students = ['Benjamin', 'Yuan', 'Igor', 'Guillaume', 'Walid']
const counterElement = document.getElementById('count')
const elementToModify = document.getElementById('to-modify')
const stopButton = document.getElementById('stop-timer')
let counter = 0
let timeoutId = null
elementToModify.addEventListener('click', modifyText)
stopButton.addEventListener('click', () => clearTimeout(timeoutId))

function modifyText() {
  const delay = Math.random() * 1000
  const nameToDisplay = students.filter((name) => {
    return name !== elementToModify.textContent
  })
  setTimeout(() => {
    elementToModify.textContent =
      nameToDisplay[Math.floor(Math.random() * nameToDisplay.length)]
  }, delay)
}

function count() {
  timeoutId = setTimeout(() => {
    counterElement.textContent = counter
    counter++
    if (counter === 10) {
      counter = 0
    }
    count()
  }, 1000)
}
count()
