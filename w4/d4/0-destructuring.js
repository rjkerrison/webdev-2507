const cat = {
  name: 'Fugee',
  age: 12,
  isCute: true,
}

// const catName = cat.name
// const catAge = cat.age
// const catIsCute = cat.isCute

const { name, age, isCute } = cat

const { name: catName, ...catProperties } = cat

console.log('catProperties', catProperties)

const students = ['Julien', 'Walid', 'Paul', 'Meryem', 'Aymeric']

const [firstElement, thirdElement, ...otherStudents] = students

console.log('firstElement', firstElement)
console.log('thirdElement', thirdElement)
console.log('rest', otherStudents)

const library = {
  name: 'Book world',
  category: [
    {
      name: 'Horror',
      books: [
        {
          title: 'Shining',
          author: 'Stephen King',
        },
        {
          title: 'It',
          author: 'Stephen King',
        },
        {
          title: 'Frankenstein',
          author: 'Mary Shelley',
        },
      ],
    },
  ],
}
const {
  name: libraryName,
  category: [
    {
      books: [, { title }],
    },
  ],
} = library
console.log('title', title)

const superCat = {
  name: {
    firstName: 'Cat-hero',
    lastName: 'dat-Cat',
  },
  superpowers: [
    {
      name: 'Fly',
      usefulness: 10,
    },
    {
      name: 'Staying clean',
      usefulness: 9,
    },
    {
      name: 'can Meow',
      usefulness: 3,
    },
  ],
}
/**
 * Get the firstname of the supercat, it's first superpower name and usefulness and
 * the rest of it's superpowers using destructuring syntax.
 */
