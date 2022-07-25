// STRING

const myName = 'Robin James Kerrison'

// string concatenation
const greeting = 'Hello, ' + myName + '!'

console.log(greeting) // 'Hello, Robin James Kerrison!'

console.log(10 + 2, '10' + '2') // 12 102
// type coercion, JavaScript deliberately changes
// types in order to fulfil the subtraction
console.log(12 - 2, '12' - '2') // 10 10
console.log("'£12' - '2'", '£12' - '2') // NaN

// number/string conversion
const int = parseInt('456.67')
console.log('int', int)
const otherInt = parseInt('456.67sdfugzeufihzeybdzjehfg')
console.log('otherInt', otherInt)
const notANumber = parseInt('&é"45')
const justOne = parseInt('1&é"45')

// interpolation / template strings
console.log(`${myName} is using backticks like a pro`)

const age = 7
const increment = 2
console.log(`${age} + ${increment}`, age + increment)

const price = 12.2 + 0.1

console.log(`This thing costs £${price.toFixed(2)}!`)

// Backticks allow for multi-line strings
const longMessage = `Hello
-- more lines --
I am a long message`
console.log(longMessage)

// we add a new line with \n, the newline escaped character
const longOldMessage = 'Hello\nthis is an old message'
// I prefer the backticks with literal newlines

const quotes = 'The three types of quote marks in JavaScript are `, \' and "'

console.log(quotes)
console.log(quotes.length) // 59, the length of the string
console.log('Short string'.length)
console.log('\n'.length)

const indexOfJames = greeting.indexOf('James')
const indexOfSomethingThatIsNotThere = greeting.indexOf('Pauline')
// 13 because that's where 'James' starts within greeting
console.log(greeting, indexOfJames)
// -1 because it doesn't exist
console.log(greeting, indexOfSomethingThatIsNotThere)

console.log('greeting', greeting)
console.log('How do we get the first character?')
console.log('greeting.charAt(0)', greeting.charAt(0))
console.log('greeting[2]', greeting[2])
console.log('greeting.charAt(-1)', greeting.charAt(-1))
console.log('greeting[-1]', greeting[-1])
console.log(
  'greeting.charAt(greeting.length - 1)',
  greeting.charAt(greeting.length - 1)
)
console.log(
  'greeting.length',
  greeting.length,
  'greeting[greeting.length]',
  greeting[greeting.length]
)

console.log('Robin'.endsWith('n'))
console.log('Kerrison'.startsWith('K'))
