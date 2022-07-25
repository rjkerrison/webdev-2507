// BONUS: ternary operator
// like a mini if/else for assigning variable to one of two values based on a condition
// useful for this kind of thing, not useful otherwise
const daysInFebruary = isItALeapYear ? 29 : 28

function getDaysInFebruary(isItALeapYear) {
  if (isItALeapYear) {
    return 29
  }
  return 28
}

const bigThing =
  567 % 13 === 0
    ? 567 * 8934 + sum(4, 5, 6)
    : (function () {
        const age = 28
        const dayofYear = 102
        return age ** dayofYear
      })()
