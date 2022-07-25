let charlottePetCount = 2

// reassignment
charlottePetCount = 3

// ADDITION ASSIGNMENT operator
// charlotte's dog has 5 puppies
charlottePetCount += 5

console.log('Charlotte has', charlottePetCount, 'pets')

// SUBTRACTION ASSIGNMENT operator
// one of the puppies dies
charlottePetCount -= 1
console.log('Charlotte has', charlottePetCount, 'pets 😭')

// MULTIPLICATION ASSIGNMENT operator
// the dogs have 999 fleas each
charlottePetCount *= 1000
console.log('Charlotte has', charlottePetCount, 'pets')

// DIVISION ASSIGNMENT operator
// the dogs get a 99% effective flea treatment
charlottePetCount /= 100
console.log('Charlotte has', charlottePetCount, 'pets')

console.log(56 / 7)
console.log(7 * 99)
console.log(456 + 234)
console.log(456 - 234)
// to the power of
console.log(2 ** 20)

// modulo / remainder
console.log(45 % 6) // 7 * 6 = 42, there is 3 remainder

// the Math object
console.log(Math.PI) // 3.1415 etc

// round down to nearest integer
const shareOfPets = Math.floor(charlottePetCount / 18)
console.log(shareOfPets) // 3

// round to nearest (up or down)
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.6)) // 5

// round up (CEILING)
console.log(Math.ceil(4.1)) // 5

const randomlyGeneratedNumber = Math.random()
console.log('randomlyGeneratedNumber', randomlyGeneratedNumber)

// generate a random integer less than 100
const randomlyGeneratedInteger = Math.floor(Math.random() * 100)
console.log('randomlyGeneratedInteger', randomlyGeneratedInteger)

// writing to specific number of decimals
const a = Math.PI
a.toFixed(5)
a.toFixed(3)
a.toFixed(2)
