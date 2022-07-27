// JavaScript objects

const bottle = {
  color: 'white',
  contents: 'water',
  topColor: 'silver',
  thing: 'uh oh',
}

console.log(bottle.color) // dot notation
console.log(bottle['contents']) // brackets notation

// Add, remove and modify keys
bottle.owner = 'Robin'

// we can have non-valid identifiers as property keys
// but we will not be able to use dot notation to access them
// (this isn't a big problem — we can use brackets)
const myProperty = 'hello I am a key'
bottle[myProperty] = 'hi i am a value'

console.log(bottle)
console.log(bottle.owner, bottle.hello, bottle['hello I am a key'])

// Dictionary
const dictionary = {
  // It's okay to use keys that are human-readable if the purpose
  // of your object keys is to show them to a user
  'dot notation':
    'the use of a dot to access properties in a javaScript object',
}

// Modify a property
console.log(bottle)
bottle.contents = 'empty'
console.log(bottle)

// Accessing all properties
for (const thing in bottle) {
  // use brackets notation to access with variable keys
  console.log(thing, bottle[thing], bottle.thing)
}

console.log('Object.keys:', Object.keys(bottle))
console.log('Object.values:', Object.values(bottle))
console.log('Object.entries:', Object.entries(bottle))

// Other ways to declare an object
let someObject = new Object()
let anotherObject = {}
someObject.hello = 'hi' // this works!

// equality with objects
console.log(anotherObject === {})
const thirdObj = anotherObject
console.log(anotherObject === thirdObj)

// removing a property
bottle[myProperty] = null
console.log(bottle)
delete bottle[myProperty]
console.log(bottle)
