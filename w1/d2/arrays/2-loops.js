const teachers = ['Robin', 'Florian', 'Haroun']

// LOOPING
// we can define a function that handles one name
function greetPerson(name) {
  console.log(`Hola, ${name}!`)
}

// for-loop
// to repeat the same operation
for (let i = 0; i < teachers.length; i++) {
  // GUARD CLAUSE
  if (!teachers[i]) {
    // ignore undefined and empty strings etc
    continue
  }

  greetPerson(teachers[i])
}

// how can we find all the names containing 'a'
const aNames = []
for (const teacher of teachers) {
  // GUARD CLAUSE
  if (!teacher) {
    // ignore undefined and empty strings etc
    continue
  }

  if (teacher.includes('a')) {
    aNames.push(teacher)
  }
}
console.log('names containing "a":', aNames)

// Remember: for-of works for strings too
let spacedName = ''
for (const character of teachers[0]) {
  spacedName += character + ' '
}
console.log(spacedName)

// forEach is for executing the
// same function for each of the items
// we can pass a function expression
aNames.forEach(function (aName) {
  console.log(`'${aName}' contains the letter 'a'`)
})
// we can pass a function by name
aNames.forEach(greetPerson)

// these two loops are equivalent
for (let i = 0; i < aNames.length; i++) {
  console.log(`'${aNames[i]}' contains the letter 'a'`)
}
for (let name of aNames) {
  console.log(`'${name}' contains the letter 'a'`)
}

// Mapping is for creating new arrays from old ones
const newNames = aNames.map(function (item) {
  return item + ' is ' + item + '!'
})
console.log('newNames', newNames)

// forEach and map are ARRAY METHODS
// this means that they are functions that operate on an array
// and we call them with arrayName.methodName()
const numbers = [4, 8, 15, 16, 23, 42]

// map creates a new array, but does not modify the original
const squaredNumbers = numbers.map(function (item) {
  return item ** 2
})
console.log(squaredNumbers)

// forEach executes a function for each item in the array, but does not modify the original
// USELESS FOR-EACH (no side effect)
numbers.forEach(function (item) {
  return item ** 2
})

// GOOD FOR-EACH (side effect of showing us the numbers)
numbers.forEach(function (item) {
  console.log(item ** 2)
})
