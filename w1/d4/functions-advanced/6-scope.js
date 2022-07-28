const a = 'HELLO'

function logA() {
  // We can access 'a' because it was declared in our parent scope
  console.log(a)
}

logA()

function defineB() {
  const b = 'HI THERE'
}
defineB()
// we can't access b, because it was declared in the function scope of defineB
// console.log(b)

// SHADOWING
const c = 'HOWDY'

function logC() {
  const c = 'BONJOUR'
  console.log(c) // BONJOUR
}
logC()
console.log(c) // HOWDY

function parent() {
  const a = 'HOLA'
  function child() {
    const a = 'OLA'
    console.log(a)
  }
  child()
  console.log(a)
}
parent()

for (let j = 0; j < 2; j++) {}
// j does not exist outside the for-loop block

// VAR SUCKS
var i = 'this value of i'

for (var i = 0; i < 2; i++) {}

// i gets overwritten because var is stupid
console.log(i)

for (var i = 10; i < 12; i++) {
  // no interference with the other let i from the other for loop
  break
}

// SHADOWING WITH A PARAMETER
let count = 0

function displayCount(count) {
  console.log('Count is', count)
}
displayCount(8)
displayCount()
