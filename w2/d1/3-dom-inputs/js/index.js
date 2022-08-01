const nameInput = document.getElementById("name")
const textContainer = document.querySelector(".text-container")
const addButton = document.getElementById("add-name")

// addButton.addEventListener("click", displayNameOnPage)

// function displayNameOnPage() {
// 	console.log(nameInput.value)
// 	// console.log(nameInput.value)
// 	textContainer.textContent = nameInput.value
// }

// nameInput.addEventListener("change", (e) => {
// 	textContainer.textContent = e.target.value
// })
nameInput.addEventListener("input", (e) => {
	textContainer.textContent = e.target.value
})

const radioInput = document.querySelectorAll('input[name="cat"]')

addButton.addEventListener("click", () => {
	for (let button of radioInput) {
		console.log(button.value, button.checked)
		if (button.checked && button.value === "yes") {
			textContainer.textContent = "You love cats !"
			break
		} else {
			textContainer.textContent = ""
		}
	}
})
