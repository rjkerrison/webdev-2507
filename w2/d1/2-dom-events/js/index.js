/**
 * Select all the element you will need at the beginning of the file, remember to select the elements, not their value / textContent...
 */

const myContainer = document.querySelector('section.container')
const myButton = document.getElementById('my-button')
const buttontoRemoveLastElement = document.getElementById('remove-last-element')

/**
 * Different ways of adding event listeners
 */

// myButton.addEventListener("click", (event) => {
// 	// event.target let you see which element triggered the event
// 	console.log(event.target)
// })
// const name = "Valery"

// myButton.addEventListener("click", (event) => doSomethingCool(event, name))

// function doSomethingCool(event, aName) {
// 	console.log(event.target, aName)
// }

/**
 * Add an event listener to the button
 */
myButton.addEventListener('click', createSquare)

function createSquare(event) {
  const square = document.createElement('div')

  square.classList.add('square')

  square.addEventListener('click', (e) => {
    console.log(e.target)
    e.target.remove()
  })
  myContainer.append(square)
}

const removeLastSquare = () => {
  /**
   * Different ways of accessing the last element of the squares
   */
  // const lastSquare = [...document.querySelectorAll(".square")].at(-1)
  // console.log(lastSquare)

  // const allSquare = document.querySelectorAll(".square")
  // const lastSquare = allSquare[allSquare.length - 1]
  // console.log("lastSquare", lastSquare)
  const lastSquare = document.querySelector('.square:last-of-type')
  console.log('lastSquare', lastSquare)
}

buttontoRemoveLastElement.addEventListener('click', removeLastSquare)
