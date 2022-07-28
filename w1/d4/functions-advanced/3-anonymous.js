// An anonymous function is
// - a function express
// - that we do not assign to a variable

// We use them as callbacks to higher order functions, e.g.:
// - setTimeout()
// - array.map()
// - array.forEach()

setTimeout(function () {
  console.log(`Some message inside an anonymous function`)
}, 1000)

setTimeout(function () {
  console.log('5 seconds later')
}, 5000)

const names = ['Robin', 'Flo', 'Haroun']
const greetings = names.map(function (name) {
  return `Hello, ${name}!`
})
console.log('Greetings', greetings)

const houses = [
  { street: 'rue Saint-Denis' },
  { street: 'rue Saint-Martin' },
  { street: 'rue Saint-Fargeau' },
]

houses.forEach(function (house) {
  console.log(`This house on ${house.street}!`)
})
