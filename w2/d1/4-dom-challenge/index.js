const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
	const pokemonList = document.querySelector(".pokemons")
	const pokemonsLength = pokemonList.querySelectorAll("li").length
	const li = document.createElement("li")
	li.textContent = `Pokemon ${pokemonsLength}`
	li.className = "pokemon"
	li.addEventListener("click", (e) => e.target.remove())
	pokemonList.appendChild(li)
})
