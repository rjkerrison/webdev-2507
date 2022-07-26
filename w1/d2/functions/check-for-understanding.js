// Create a function that accepts 3 numbers as parameters, and returns their sum.
function sum(a, b, c) {
  return a + b + c
}

// Create a function named isNameOddOrEven() that accepts a string as a parameter.
// The function should return whether a received string
// has an odd or even number of letters.
// The expected return value should be in the following format:
//   ’<name> has an even/odd number of letters’
function isNameOddOrEven(name) {
  let evenOrOdd = 'odd'
  if (name.length % 2 === 0) {
    evenOrOdd = 'even'
  }
  return `${name} has an ${evenOrOdd} number of letters`
}

console.log(isNameOddOrEven('Robin'))
