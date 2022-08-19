const { Router } = require('express')
const Sock = require('../models/Sock.model')

const router = new Router()

// GET /socks
router.get('/', async (req, res) => {
  const socks = await Sock.find()
  res.json({ socks })
})

// POST /socks
router.post('/', async (req, res) => {
  const newSock = req.body
  const createdSock = await Sock.create({
    name: newSock.name,
    colour: newSock.colour,
    foot: newSock.foot,
  })
  console.log('createdSock', createdSock)

  res.json({ sock: createdSock })
})

// export router so we can import it elsewhere
module.exports = router
