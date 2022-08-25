const Character = require('../models/Character.model')
const openConnection = require('../db/')
const mongoose = require('mongoose')

const characters = [
  {
    name: 'Han Solo',
    occupation: 'Smuggler',
    weapon: 'Blaster Pistol',
    cartoon: false,
  },
  {
    name: 'Luke Skywalker',
    occupation: 'Jedi Knight',
    weapon: 'Lightsaber',
    cartoon: false,
  },
  {
    name: 'Sponge Bob',
    occupation: 'Lives under the sea',
    weapon: 'Crabby Patty',
    cartoon: true,
  },
]

async function seedDatabase() {
  try {
    const db = await openConnection()
    await Character.deleteMany()
    console.log(`Succesfully connected to ${db.connection.name} database.`)
    const createdCharacters = await Character.create(characters)
    console.log(`Created ${createdCharacters.length} characters 🥸`)
    await mongoose.disconnect()
    console.log(`Succesfully disconnected from ${db.connection.name}`)
  } catch (error) {
    console.error(
      `Something went wrong while creating the seed: ${error.message}`
    )
  }
}

seedDatabase()
