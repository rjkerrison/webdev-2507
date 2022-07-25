// Boolean

// true or false

const isTodayMonday = true
const isItSnowing = false

// && - this means AND in a logical sense
// if both are true; the whole thing is true
// if either is false; the whole thing is false
const isItSnowingAndMonday = isTodayMonday && isItSnowing

console.log(isItSnowingAndMonday)

// || - this means OR in a logical sense
// if both are false; the whole thing is false
// if either is true; the whole thing is true
const isItSnowingOrMonday = isTodayMonday || isItSnowing

console.log(isItSnowingOrMonday)

// Short-circuit
function evaluateMe() {
  console.log('I was evaluted')
}

console.log(true || evaluateMe())
console.log(false && evaluateMe())

// TRUTHYNESS
// non-empty strings are truthy
// non-zero numbers are truthy
// const notNecessarilyBoolean = false || 'haha i am a string'
const firstTruthyThing = 'truthy because I am a populated string' || true
const firstTruthyThing2 =
  false || 0 || -0 || null || '' || NaN || undefined || 'truthy' || true

console.log('firstTruthyThing', firstTruthyThing)
console.log('firstTruthyThing2', firstTruthyThing2)
console.log(0 || 'hello')
console.log(0 && 'hello')

const name = ''
const defaultName = 'default name'

console.log(name || defaultName)

const age = 28
const isOver30 = age > 30
console.log('isOver30', isOver30)

const myName = 'Robin'
const myNameStartsWithR = myName.startsWith('R')
console.log(myNameStartsWithR)

const isNotMonday = !isTodayMonday
console.log(myName !== 'Florian')
console.log(myName === 'Robin')

// objects are compared by reference
const a = {}
const b = {}
console.log(a === b)
const c = a
console.log(a === c)
