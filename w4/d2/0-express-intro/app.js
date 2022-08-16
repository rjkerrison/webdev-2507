/**
 * npm install express
 */

/**
 * Require express
 */

const express = require('express')
const port = 3000

/**
 * Create the app from express
 */
const app = express()

app.use(express.json())

/**
 * Create a route, we will use app
 */

const disneyCharacters = [
  {
    _id: 1,
    name: 'Donald Duck',
    hobbies: ['Kwack', 'Kwacky kwak kooooak'],
  },
  {
    _id: 2,
    name: 'Mowgli',
    hobbies: ['Singing', 'Taming'],
  },
  {
    _id: 3,
    name: 'Luke Skywalker',
    hobbies: ['Fighting', 'Laser-tag'],
  },
]

app.get('/characters', (request, response) => {
  console.log('Request query: ', request.query)
  const name = request.query.name
  console.log('name', name)
  if (name) {
    const result = disneyCharacters.filter((oneCharacter) => {
      return oneCharacter.name.includes(name)
    })
    return response.json({
      message: `Found ${result.length} character(s)`,
      result,
    })
  }

  response.json(disneyCharacters)
})

/**
 * Shareable route with params
 */

app.get('/characters/:_id', (req, res) => {
  const { _id } = req.params
  const myUniqueCharacter = disneyCharacters.find((character) => {
    return character._id === Number(_id)
  })
  console.log(myUniqueCharacter)
  return res.json(myUniqueCharacter)
})

app.post('/characters', (req, res) => {
  // res.json(req.body)
  // const name = req.body.name
  // const hobbies = req.body.hobbies
  /**
   * The name of your variable must match a key inside of the request body
   */
  const { name, hobbies } = req.body

  const _id = disneyCharacters.length + 1
  // const characterToCreate = {
  //   name: name,
  //   hobbies: hobbies,
  //   _id: _id,
  // }
  const characterToCreate = {
    name,
    hobbies,
    _id,
  }
  disneyCharacters.push(characterToCreate)
  res.json({
    message: `You created ${name} ! Good job.`,
    createdCharacter: characterToCreate,
  })
})

app.listen(port, () => {
  console.log(`Server is rocking @ http://localhost:${port}`)
})
