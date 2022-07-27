// JavaScript objects
const bottleColour = 'white'
const bottleContents = 'nothing'

// object literal syntax
const bottle = {
  colour: 'white',
  contents: ['air', 'tiny bit of water'],
  lidColour: 'silver',
  isEmpty: true,
  someFunction: function () {},
  'a key with a space in its name': true,
}

console.log(bottle) // we can usually log the whole objects
console.log(bottle.colour) // dot notation
console.log(bottle['colour']) // brackets notation
console.log(bottle.lidColour) // dot notation
console.log(bottle['lidColour']) // brackets notation
console.log(bottle.contents) // brackets notation

// Add, remove and modify keys
bottle.owner = 'Robin'
console.log(bottle.owner)

// we can have non-valid identifiers as property keys
// but we will not be able to use dot notation to access them
// (this isn't a big problem — we can use brackets)
const myProperty = 'hello I am a key'
bottle[myProperty] = 'hi i am a value'
// setting a new key-value pair in the bottle
bottle['a valid key'] = true

console.log(bottle)
console.log(bottle.owner, bottle.hello, bottle['hello I am a key'])

// Dictionary
const dictionary = {
  // It's okay to use keys that are human-readable if the purpose
  // of your object keys is to show them to a user
  'dot notation':
    'the use of a dot to access properties in a JavaScript object',
}

// Modify a property
console.log(bottle)
bottle.contents = []
console.log(bottle)

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
