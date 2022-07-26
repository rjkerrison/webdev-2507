// a and b are the PARAMETERS
function add(a, b) {
  return a + b
}
const multiply = (a, b) => {
  return a * b
}
const subtract = (a, b) => a - b

// 4 and 8 are ARGUMENTS
console.log(add(8, 4))

// First ARGUMENT passed into a function
// becomes first PARAMETER inside the function
// ARGUMENTS are assigned to
// PARAMETERS by order

function greet(greeting, name, times) {
  for (let i = 0; i < times; i++) {
    console.log(`${greeting}, ${name}!`)
  }
}
greet('Hello', 'Florian', 1)
greet('Haroun', 'Hey', 5)
// order matters
greet(6, 'Walid', 'Bonjour')

// It is possible (ES6) to define defaults for parameters
function addThemAll(a, b, c, d = 0) {
  return a + b + c + d
}
console.log(addThemAll(4, 5, 6, 7))
console.log(addThemAll(4, 5, 6))
