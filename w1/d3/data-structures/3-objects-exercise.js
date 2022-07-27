// Iteration 1
const user = { name: 'Robin', id: 1 }

// Iteration 2
const book1 = {
  title: 'The Catcher in the Rye',
  author: 'J.D Salinger',
  isbn: '0316769487',
  category: 'Classic Literature',
}
const book2 = {
  title: 'Catch-22',
  author: 'Joseph Heller',
  isbn: '9781451626650',
  category: 'Classic Literature',
}

// Iteration 3
user.books = [book1, book2]

// Iteration 4
const library = []

library.push(user)

// Iteration 5
const book3 = { title: 'Little Women' }

library[0].books.push(book3)

console.log(library)
console.log(library[0])
