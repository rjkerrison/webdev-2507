// map and forEach

const myArray = ['Robin', 'Pauline', 'Katya', 'Florian']

const lengths = myArray.map((name) => name.length)

console.log(lengths)

// forEach

myArray.forEach((item) => {
  console.log(item)
})

// filter
// - give us an array of all the entries which meet
// a given criterion/condition

const namesEndingWithN = myArray.filter(function (item) {
  return item.length > 5 && item.endsWith('n')
})
console.log(namesEndingWithN)
