// function declaration (statement)
function welcomeMessage(message) {
  return message
}

// function assigned to a variable
const greeting = welcomeMessage('So nice to have you here! Welcome!')

console.log(greeting) // So nice to have you here! Welcome!

// variable2 gets assigned the same pointer as welcomeMessage
// so variable2 and welcomeMessage refer to the same function
const variable2 = welcomeMessage

console.log(welcomeMessage)
console.log(variable2.name)

const variable3 = function () {
  return 'i am an anonymous function'
}
console.log('variable3.name:', variable3.name)
const variable4 = variable3
console.log('variable4.name:', variable4.name)

// whether expression or declaration,
// a function can call itself
const recurse = function (i) {
  if (i > 10) {
    return `i is ${i}`
  }
  return recurse(i + 1)
}
console.log(recurse(0))

// PASSING FUNCTIONS AS ARGUMENTS
// (accepting functions as parameters)

function logFunctionName(f) {
  // we can accept a function as a parameter
  console.log(`the function name is "${f.name}"`)
  // we can call that argument function from inside this function
  const result = f()
  console.log(`running the function returns "${result}"`)
}

const sayHello = () => {
  return 'hello'
}
const sayHowdy = function () {
  return 'howdy'
}

const sayHello2 = sayHello

// when we pass a function as an argument
// we call it a CALLBACK
logFunctionName(sayHello)
logFunctionName(sayHowdy)
logFunctionName(sayHello2)
logFunctionName(() => {})
