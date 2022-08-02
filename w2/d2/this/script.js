const btn = document.getElementById("button")
const showMeThis = () => {
	console.log("'this' in an arrow function: ")
	console.log(this)
}

btn.addEventListener("click", () => {
	console.log("'this' in an arrow function: ")
	console.log(this)
})

btn.addEventListener("click", showMeThis)
btn.addEventListener("click", action)

function action() {
	console.log("'this' in a declared function", this)
}

// window.a = "test"

// console.log(a)
