// console.log(document.querySelector(".title"))

const title = document.getElementById("title")
// console.log("title textContent", title.textContent)

title.textContent += " <span>JS</span> can modify stuffs!"

const section = document.querySelector("section")
const myStudents = section.querySelectorAll(".student")
const studentsThroughClassName = section.getElementsByClassName("student")
const myStudentList = section.querySelector(".students")

myStudents.forEach((student) => console.log(`Hello ${student.textContent}`))
const spreadedStudents = [...myStudents]
spreadedStudents.map((student) => (student.textContent += " !!!"))

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

const paragraphes = document.querySelectorAll(".paragraph:not(.important)")
console.log("paragraphes", paragraphes)
paragraphes.forEach((paragraph) => {
	paragraph.classList.add("not-important")
})

document
	.querySelector(".paragraph:nth-of-type(2)")
	.classList.toggle("paragraph")

const importantParagraph = document.querySelector(".paragraph.important")

importantParagraph.style = `
  font-size:3rem;
  font-weight:900;
  `

importantParagraph.style.backgroundColor = "#ff0000"

importantParagraph.setAttribute("custom-attribute", "myValue")

importantParagraph.dataset.paragraphName = "Lorem, again."
importantParagraph.dataset.myNewKey = "some new value !."

console.log(importantParagraph.dataset)
