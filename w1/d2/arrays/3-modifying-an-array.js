/* Manipulating items in an array
- push
- pop
- shift
- unshift
- splice
- slice
*/
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// adds onto the end of an array
const pushReturnValue = alphabet.push('H', 'I')
console.log('pushReturnValue', pushReturnValue)
console.log('alphabet after push', alphabet)

// .pop() takes no arguments
// removes from the array the last item
// returns that last item
const poppedThing = alphabet.pop()
console.log('we popped', poppedThing)
console.log('alphabet after pop', alphabet)

// .shift() takes no arguments
// removes from the array the FIRST item
// returns that item
const shiftedThing = alphabet.shift()
console.log('we shifted', shiftedThing)
console.log('alphabet after shift', alphabet)

// .unshift() takes one argument
// adds that item to the start of the array
const unshiftReturnValue = alphabet.unshift('Z')
console.log('unshiftReturnValue', unshiftReturnValue)
console.log('alphabet after unshift', alphabet)

// Splice vs slice
// splice returns and removes
const spliceReturnValue = alphabet.splice(2, 3)
console.log('alphabet.splice(3, 2) spliceReturnValue', spliceReturnValue)
console.log('alphabet after splice', alphabet)

// slice returns without modifying
const sliceReturnValue = alphabet.slice(2, 4)
console.log('alphabet.slice(2, 4) sliceReturnValue', sliceReturnValue)
console.log('alphabet after slice', alphabet)

// slice without second argument goes to the end
console.log(alphabet.slice(4))
// slice with negative second argument counts from the right

const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log('negative; counting from the right', alphabetLower.slice(1, -2))

// splice can also INSERT
console.log(alphabetLower)
alphabetLower.splice(2, 3, 'CDE', 'F', 'G', 'H')
// removing is optional, can specify a deleteCount of 0
alphabetLower.splice(2, 0, 'I', 'J')
console.log(alphabetLower, 'after splice insertion')
