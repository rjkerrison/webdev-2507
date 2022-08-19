const { Router } = require('express')
const Sock = require('../models/Sock.model')

const router = new Router()

// GET /socks
router.get('/', async (req, res) => {
  const socks = await Sock.find()
  res.json({ socks })
})

// GET /socks/:id
router.get('/:id', async (req, res) => {
  const sock = await Sock.findById(req.params.id)
  res.json({ sock })
})

// POST /socks
router.post('/', async (req, res, next) => {
  try {
    const newSock = req.body
    const createdSock = await Sock.create({
      name: newSock.name,
      colour: newSock.colour,
      foot: newSock.foot,
    })
    console.log('createdSock', createdSock)

    res.status(201).json({ sock: createdSock })
  } catch (error) {
    next(error)
  }
})

// PATCH /socks/:id
router.patch('/:id', async (req, res) => {
  const newSock = req.body
  const sock = await Sock.findByIdAndUpdate(
    req.params.id,
    {
      name: newSock.name,
      colour: newSock.colour,
      foot: newSock.foot,
    },
    { new: true }
  )
  res.json({ sock })
})

// DELETE /socks/:id
router.delete('/:id', async (req, res) => {
  await Sock.findByIdAndDelete(req.params.id)
  res.sendStatus(204)
})

// export router so we can import it elsewhere
module.exports = router
