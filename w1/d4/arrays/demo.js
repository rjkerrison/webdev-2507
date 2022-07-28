const numbers = [4, 5, 6]

// indexOf finds the index
console.log(numbers.indexOf(5)) // 1
console.log(numbers.indexOf(9)) // -1, because it is not there

console.log('BEFORE', numbers)
numbers.pop()
console.log('AFTER POP', numbers)

// join can create a new string
console.log(numbers.join(' + '))

console.log(numbers.group((a) => a % 2))
