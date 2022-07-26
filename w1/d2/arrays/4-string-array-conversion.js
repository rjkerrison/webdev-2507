// Getting an array by splitting a string
const className = 'WebDev 2507'
console.log(className.split(''))

console.log(className.split(' ')) // break into words
console.log(className.split('e'))

const splitNames = 'Robin, James, Kerrison'.split(', ')
console.log(splitNames)
// forming a string from an array by JOINING
console.log("splitNames.join(' and ')")
console.log(splitNames.join(' and '))

// can reverse split with join and vice-versa
className.split('').join('')
