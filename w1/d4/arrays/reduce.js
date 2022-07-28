const coins = [1, 2, 5, 10, 20, 50, 100, 200]

const sum = coins.reduce(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue })
  // whatever I return
  // becomes the next previousValue
  return previousValue + currentValue
}, 0)

console.log('sum', sum)

const libraryUsers = [
  { name: 'Charlotte', books: ['book1', 'book2'] },
  { name: 'Robin', books: ['book1', 'book2', 'book3'] },
  { name: 'Flo', books: ['book1', 'book2', 'book3'] },
  { name: 'Haroun', books: ['book1', 'book2', 'book3'] },
]

const booksCount = libraryUsers.reduce(
  function (previousCount, currentUser) {
    console.log({ previousCount, currentUser })
    return previousCount + currentUser.books.length
  },
  // by providing an initial value
  // we can have a reduce which reduces to a different data type to what is in the array

  // array of objects (users) => integer
  // therefore, we initialise with 0, an integer
  0
)

console.log(booksCount)

// this can be handled
// we just need our reducing function to handle the different types
const items = [1, 2, 'Robin', 10, 'Hello']

const size = items.reduce((prev, current) => {
  // sum of values if numbers or length if strings
  if (typeof current === 'number') {
    return prev + current
  }
  if (typeof current === 'string') {
    return prev + current.length
  }
  // have a default in case of other types
  return prev
}, 0)

size
