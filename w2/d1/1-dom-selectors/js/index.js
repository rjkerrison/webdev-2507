// console.log(document.querySelector(".title"))
/**
 * Get an element with getElementById (the id you provide must match an element with that id in the HTML 😁)
 */
const title = document.getElementById('title')
// console.log("title textContent", title.textContent)
/**
 * Adding some text to the Title, the html tags are not parsed, they are read as text.
 */
title.textContent += ' <span>JS</span> can modify stuffs!'

/**
 * Select the first section and store it in a variable
 */
const section = document.querySelector('section')

/**
 * Select all of the elements with a .student class that are inside of the section element
 */
const myStudents = section.querySelectorAll('.student')
const studentsThroughClassName = section.getElementsByClassName('student')
const myStudentList = section.querySelector('.students')

myStudents.forEach((student) => console.log(`Hello ${student.textContent}`))
const spreadedStudents = [...myStudents]
spreadedStudents.map((student) => (student.textContent += ' !!!'))

myStudentList.innerHTML += `<li class='student'>Guillaume</li>`

// console.log("with querySelectorAll", myStudents)
// console.log("with getElementsByClassName", studentsThroughClassName)

// for (const student of studentsThroughClassName) {
// 	console.log(student.textContent)
// }

// console.log(document.querySelector(".student:nth-of-type(2)"))

// section.innerHTML = `
// console.log(document.querySelectorAll(".student"))
// <ul>
//   <li>Do stuff with innerHTML</li>
//   <li>Do stuff with innerHTML</li>
//   <li>Do stuff with innerHTML</li>
// </ul>
// `

/**
 * Select all of the element with a class of `paragraph`, except the one that have an `important` class
 */

const paragraphes = document.querySelectorAll('.paragraph:not(.important)')
console.log('paragraphes', paragraphes)
paragraphes.forEach((paragraph) => {
  paragraph.classList.add('not-important')
})

document
  .querySelector('.paragraph:nth-of-type(2)')
  .classList.toggle('paragraph')

const importantParagraph = document.querySelector('.paragraph.important')

/**
 * Modifying the style of the element in a CSS-like way
 */
importantParagraph.style = `
  font-size:3rem;
  font-weight:900;
  `

/**
 * Modifying the style of a specific property of the element
 */
importantParagraph.style.backgroundColor = '#ff0000'

/**
 * Set a custom attribute
 */
importantParagraph.setAttribute('custom-attribute', 'myValue')

/**
 * Modify / Read / Create some data-* attributes
 */
importantParagraph.dataset.paragraphName = 'Lorem, again.'
importantParagraph.dataset.myNewKey = 'some new value !.'

console.log(importantParagraph.dataset)
