const { default: mongoose } = require('mongoose')
const Sock = require('./Sock.model')

async function testSockCreationAndDeletion() {
  console.log('Count of socks', await Sock.count())
  const createdSock = await Sock.create({
    name: 'Smelly Sock',
    foot: 'right',
    colour: 'red',
    size: 43,
  })

  console.log(createdSock)
  console.log('Count of socks', await Sock.count())

  await Sock.findByIdAndDelete(createdSock._id)

  console.log('DELETED')
  console.log('Count of socks', await Sock.count())
}

mongoose.connect('mongodb://localhost:27017/sock-shop', async () => {
  console.log('Connected to Database')
  await testSockCreationAndDeletion()
  mongoose.connection.close()
})
