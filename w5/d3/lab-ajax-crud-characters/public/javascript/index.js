/**
 * You might want to use this template to display each new characters
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#examples
 */
const characterTemplate = document.getElementById('template')
const charactersContainer = document.querySelector('.characters-container')
const nameInput = document.getElementById('character-name')
const deleteInput = document.getElementById('delete')
document
  .getElementById('fetch-all')
  .addEventListener('click', async function (event) {
    charactersContainer.innerHTML = ''
    // fetch('http://localhost:5005/api/characters')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => console.error(e))
    // axios.get('http://localhost:5005/api/characters').then((data) => {
    //   console.log(data)
    // })
    const { data } = await axios.get('http://localhost:5005/api/characters')

    data.forEach((character) => {
      // const characterToAdd = `
      // <div class="character-info">
      //       <div class="character-id">Character Id</div>
      //       <div class="name">Character Name</div>
      //       <div class="occupation">Character Occupation</div>
      //       <div class="cartoon">Is a Cartoon?</div>
      //       <div class="weapon">Character Weapon</div>
      //     </div>
      // `

      cloneAndAddCharacter(character)
    })
  })

document
  .getElementById('fetch-one')
  .addEventListener('click', async function (event) {
    charactersContainer.innerHTML = ''
    const name = nameInput.value
    // console.log(name)
    const { data } = await axios.get(
      'http://localhost:5005/api/characters/name/' + name
    )
    cloneAndAddCharacter(data)
  })

document
  .getElementById('delete-one')
  .addEventListener('click', async function (event) {
    const id = deleteInput.value
    const response = await axios.delete(
      'http://localhost:5005/api/characters/' + id
    )
    console.log(response)
  })

document
  .getElementById('edit-character-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault()
    let id = document.getElementById('edit-id').value
    let name = document.getElementById('edit-name').value
    let occupation = document.getElementById('edit-occupation').value
    let weapon = document.getElementById('edit-weapon').value
    let cartoon = document.getElementById('edit-cartoon').checked
    const characterToUpdate = { id, name, occupation, weapon, cartoon }
    // if (name !== '') {
    //   characterToUpdate.name = name
    // }
    // if (occupation !== '') {
    //   characterToUpdate.occupation = occupation
    // }
    // if (weapon !== '') {
    //   characterToUpdate.weapon = weapon
    // }
    // if (cartoon !== '') {
    //   characterToUpdate.cartoon = cartoon
    // }
    // console.log(characterToUpdate)
    console.log(Object.entries(characterToUpdate))
    for (let [key, value] of Object.entries(characterToUpdate)) {
      if (value === '') {
        delete characterToUpdate[key]
      }
    }
    console.log(characterToUpdate)
    const { data } = await axios.patch(
      `http://localhost:5005/api/characters/${id}`,
      characterToUpdate
    )

    console.log(data)
  })

document
  .getElementById('new-character-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault()
    const name = document.getElementById('new-name').value
    const occupation = document.getElementById('new-occupation').value
    const weapon = document.getElementById('new-weapon').value
    const cartoon = document.getElementById('new-cartoon').checked
    const characterToCreate = {
      name,
      occupation,
      weapon,
      cartoon,
    }

    const { data } = await axios.post(
      'http://localhost:5005/api/characters/',
      characterToCreate
    )

    console.log(data)
  })

function cloneAndAddCharacter(character) {
  const clone = characterTemplate.content.cloneNode(true)
  clone.querySelector('.character-id').textContent = character._id
  clone.querySelector('.name').textContent = character.name
  clone.querySelector('.cartoon').textContent = character.cartoon
  clone.querySelector('.weapon').textContent = character.weapon
  clone.querySelector('.occupation').textContent = character.occupation

  charactersContainer.append(clone)
}
