const houses = [
  { street: 'rue Saint-Denis' },
  { street: 'rue Saint-Martin' },
  { street: 'rue Saint-Fargeau' },
]

// Arrow functions are useful as anonymous functions
houses.forEach((house) => {
  console.log(`This house on ${house.street}!`)
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Arrow functions are really short / succinct
// when we are immediately returning an expression without a function body / code-block,
// because there's no need for a return keyword
const squares = numbers.map((number) => number ** 2)
console.log(squares)

const evenOdd = numbers.map((number) => (number % 2 === 0 ? 'even' : 'odd'))
console.log(evenOdd)
