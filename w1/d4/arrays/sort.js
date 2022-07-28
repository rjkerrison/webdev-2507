const ironhackers = ['Robin', 'Haroun', 'Rodney', 'Homer', 'Florian']

// .sort() modifies the original array
ironhackers.sort()

console.log(ironhackers)

// sorting strings by length
const sortByLength = (a, b) => {
  return a.length - b.length
}
ironhackers.sort(sortByLength)
console.log(ironhackers)

const coins = [1, 2, 5, 10, 20, 50, 100, 200]

coins.sort()
console.log(coins)

coins.sort((a, b) => a - b)
console.log(coins)

// bubble sort
coins.sort(function (a, b) {
  if (a > b) {
    console.log(`${a} should go before ${b}`)
    // When a is bigger, return -1
    return -1 // a should go before b
  }
  if (a < b) {
    // When a is smaller, return 1
    return 1
  }
  return 0
})

console.log(coins)

coins.sort(function (a, b) {
  return a - b
})

console.log(coins)
coins.reverse()
console.log(coins)

// avoiding modifying the original by CLONING
const items = [1, 2, 'Robin', 10, 'Hello']

// clone an array in case you need
const cloneItems = structuredClone(items)
// .sort() modifies the array
cloneItems.sort()
console.log(items, cloneItems)
