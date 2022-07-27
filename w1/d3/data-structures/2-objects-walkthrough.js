// Object in JS

// dictionary
// words -> definitions
// object
// keys -> values

const bicycle = {
  // start with a curly brace
  // key: value
  owner: 'Robin',
  // key: value
  manufacturer: 'Peugeot',
  // key: value
  model: 'Speedy 1982',
  // key: value
  colour: 'light blue',
  numberOfGears: 5,
  numberOfWheels: 2,
  //   end with a curly brace
}

const student = {
  name: 'Gaurav',
  // values can be arrays
  pets: [
    // arrays can contain objects
    { species: 'cat', name: 'Minou' },
    { species: 'cat', name: 'Gypsy' },
  ],
}

console.log('student is', student)
console.log('bicycle is', bicycle)

// reassign the properties by accessing with dot notation
bicycle.numberOfGears = 8
console.log('bicycle is', bicycle)
// bracket accessor notation
// a lot like array index accessors but with strings instead of integers
bicycle['model'] = 'Rapid 1983'
console.log('bicycle is', bicycle)

console.log(
  `${bicycle.owner} has a ${bicycle.colour} ${bicycle.model} with ${bicycle['numberOfGears']} gears!`
)

// Adding a property
console.log('student is', student)
student.vehicle = bicycle
student['classes'] = ['Webdev 905']
student['longer property name with spaces'] = true
console.log('student is', student)

// This doesn't work:
// student.longer property name with spaces
// We can only use dot notation when the key is a valid identifier
// (i.e. can we use it for a variable name?)

// const vs let
let hello = { name: 'hi' }
// we cannot reassign a const, but we can reassign a let
hello = { name: 'bye' }

student.classes.push('UXUI 905')
console.log('student is', student)

// removing a property
delete student.vehicle
console.log('student is', student)

// Looping an object
for (let key in bicycle) {
  console.log('key:', key)
  // square brackets is useful
  // when the key is a variable!
  console.log('value:', bicycle[key])
}

// NOTE:
// bicycle.key is the same as bicycle['key']
// bicycle.key is NOT the same as bicycle[key]

// other ways to get keys, values, entries

// Converting objects into arrays
// array of keys
console.log(Object.keys(student))
// array of values
console.log(Object.values(student))
// pairs like [key, value]
console.log(Object.entries(student))
