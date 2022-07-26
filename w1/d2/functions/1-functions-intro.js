/* A function is:

- Container for some code
- Can execute that code
- Accept some data
- Can return / give back some data

A function is for:

- performing small, understandable tasks
- repeating operations

*/

// Creating functions
// function definition / function declaration / function statement
function hello() {
  console.log('line 18')
  console.log('Hello, WebDev 2507!')
  console.log('line 20')
}
// function keyword followed by the name
// followed by parentheses containing (empty) parameters
// followed by a code block (code wrapped in {})
/* 
FUNCTION DECLARATION

function functionName() {
  code block surrounded by curly braces
}
*/
// Calling the function
// name of the function followed by brackets (parentheses)
console.log('line 34')
hello()
console.log('line 36')
// HOISTED!
// available before time
buongiorno()
// NOT HOISTED - will error
// bonjour()

function buongiorno() {
  console.log('Buongiorno!')
}
// function expression
const bonjour = function () {
  console.log('Bonjour !')
}

// function expressions can allow us
// to change to which function
//  a variable name points
let hola = function () {
  console.log('¡Hola!')
}
hola()
hola = function () {
  console.log('Aloha')
}
hola()

// arrow functions / arrow expression
const xinChao = () => {
  console.log('Xin chao')
}
xinChao()
