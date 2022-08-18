// Traditional Function Declaration
function square(x) {
  return x ** 2;
}

// Traditional Anonymous Function
(function (x) {
  return x ** 2;
})

// We can store our Anonymous Function in a variable so we can reuse it
const alsoSquare = function (x) {
  return x ** 2;
}

// An Arrow Function is always anonymous unless stored in a variable 
((x) => { return x ** 2 })

const ArrowSquare = (x) => { return x ** 2 }

// When we remove the body braces and the "return" keyword — the "return" is implied.
const ArrowSquareWithImplicitReturn = (x) => x ** 2

// We can also remove the argument parentheses when we have a single parameter
const ArrowSquareWithoutArgumentParentheses = x => x ** 2