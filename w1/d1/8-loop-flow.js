// Loops

// for-loop
// for (initialiser; continue condition; incrementer)
for (let i = 0; i < 21; i++) {
  console.log(`i is now ${i}`)
}

const startTime = Date.now()
let someName = 'b'
// Always be sure they will exit
// the condition needs to be false eventually
while (someName.length < 50) {
  someName += 'aa'

  if (someName.length > 30) {
    break
  }
  // exiting after one second
  if (Date.now() - startTime > 1000) {
    break
  }
}
console.log(someName, someName.length)

let a = 0

// In do while
do {
  a++
  a++
  if (a > 20) {
    console.log('hello!')
  }
} while (a > 10)

console.log(a)

// for ... of ...
const someNames = ['Guillaume', 'Yuan', 'Julien']

// loops over values in an array
for (const name of someNames) {
  console.log(`Hello, ${name}`)
}
for (let i = 0; i < someNames.length; i++) {
  console.log(`Goodbye, ${someNames[i]}`)
}

for (const letter of 'Robin') {
  console.log(letter)
}

const myProgrammingLanguages = {
  javascript: true,
  html: true,
  css: true,
  rust: [false, false, false],
}

// for ... in ... loop
// loop over keys of the objects
for (const key in myProgrammingLanguages) {
  console.log(key, myProgrammingLanguages[key])
}

// 'continue' keyword

let i = 0

while (i < 10) {
  i++
  if (i === 3) {
    // skip to the next iteration in the loop
    continue
  }
  if (i === 6) {
    // end the whole loop
    break
  }
  console.log(`The number is: ${i}.`)
}
