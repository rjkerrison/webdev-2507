// Connect to the database !
require('dotenv').config()
require('../db')
const User = require('../models/User.model')
const mongoose = require('mongoose')
const users = [
  {
    username: 'Aymeric101',
    email: 'aymeric1@mail.com',
    phoneNumber: 1234567889,
  },
  {
    username: 'Laurent Socks',
    email: 'socks-inc@mail.com',
    phoneNumber: 12456987654,
  },
  {
    username: 'Igor-t-a-tord',
    email: 'igor@mail.com',
    phoneNumber: 456789321,
  },
]

async function seedTheData(newUsers) {
  console.log('Deleting users...')
  try {
    await User.deleteMany()

    const createdUsers = await User.create(newUsers)
    console.log(`Created ${createdUsers.length} users!`)

    // process.exit()
    await mongoose.disconnect()
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

seedTheData(users)
