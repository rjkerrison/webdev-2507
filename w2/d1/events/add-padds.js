// ELEMENTS
// always start by getting our elements
const button = document.querySelector('button')
const paddingtons = document.querySelector('ul#paddingtons')

// EFFECT (side effect/function/thing we want to happen)
const addAPaddington = () => {
  console.log('Adding a Paddington!')
  // We need to create an li
  const li = document.createElement('li')
  // We need to populate the text
  li.textContent = 'Paddington'
  // We need to add the li to the ul
  paddingtons.appendChild(li)
  // The following line works but is more brittle, prone to error, less object-oriented
  // paddingtons.insertAdjacentHTML('beforeend', '<li>Paddington</li>')
}

// EVENT - add event listener
button.addEventListener('click', addAPaddington)
