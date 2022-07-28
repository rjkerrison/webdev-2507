// SCOPING
// which variables are available in which part of the code

// global scope (or root scope, or top-level scope)
// NOT inside a code block (if, function, or anything else wrapped in {})
const globalVariable = 42
let globalVariable2 = 108

// functions have a FUNCTION SCOPE
// also known as a LOCAL SCOPE
function someFunc() {
  // scopedVariable is not available outside this function
  const scopedVariable = 14
  console.log(`The answer is ${globalVariable}.`)
}
someFunc()
// this errors with
// ReferenceError: scopedVariable is not defined
// because the scopedVariable name has never been declared in this scope
// console.log(scopedVariable)
const a = 17
const b = 23

// FUNCTION SCOPES are separate from each other
// one function cannot see another function's local scope
function someFunc2() {
  // scopedVariable is not available in this function

  // we can override variables from a higher scope
  const globalVariable = 15
  console.log(`The answer is ${globalVariable}.`)

  const a = 45
  return a * b
}

// DIFFERENCE between CONST/LET and VAR
var hello = 'hello'
// code-block scope!
if (true) {
  var hello = 'hi'
  const globalVariable = 15
  someFunc(23)
  console.log('hello', 'inside if-block', hello)
  console.log('globalVariable', 'inside if-block', globalVariable)
}

console.log('hello', 'outside if-block', hello)
console.log('globalVariable', 'outside if-block', globalVariable)

someFunc()
someFunc2()
