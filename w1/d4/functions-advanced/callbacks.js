function calculateBiggestPrimeLessThan(limit, callback) {
  if (limit === 100) {
    callback(97)
  }
}

// We can pass an anonymous function
calculateBiggestPrimeLessThan(100, function (result) {
  console.log(`The result is ${result}`)
})

// or we can use a name we have
const makeGuessingGame = function (result) {
  console.log(`Guess what ${result * 127} divides by!`)
}

calculateBiggestPrimeLessThan(100, makeGuessingGame)

// The most common use case of callbacks

const names = ['Robin', 'Arthur', 'Caetano', 'Florian']

names.forEach(function (item) {
  console.log(`item is ${item}`)
})

// Create a function that accepts a callback
// and calls it multiple times
function logSevenTimes(callback) {
  for (let i = 0; i < 7; i++) {
    console.log(callback(i))
  }
}

logSevenTimes((i) => 'HELLO THERE ' + i)
logSevenTimes((i) => Math.random() * i)

// A function which accepts a callback
// is known as a higher order function
