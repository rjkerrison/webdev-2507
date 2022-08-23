const router = require('express').Router()
const Message = require('../models/Message.model.js')
const mongoose = require('mongoose')
const { isAuthenticated, isAdmin } = require('../middleware/middlewares.js')

/**
 * All routes are prefixed with /message
 */

// /message/jshikt564b5h6rea41s/hgwjairlnbkjrb46816a
// /message/sender/jshikt564b5h6rea41s/receiver/hgwjairlnbkjrb46816a
router.post(
  '/receiver/:receiverId',
  isAuthenticated,
  isAdmin,
  async (req, res, next) => {
    console.log('In the protected route ', req.user)
    try {
      const { receiverId } = req.params
      if (!mongoose.isValidObjectId(receiverId)) {
        return res.status(400).json({ message: `Please provide a valid Id` })
      }
      const { content } = req.body
      if (!content) {
        next({ message: 'You should send some informations !' })
      }

      const messageToCreate = {
        content,
        author: req.user._id,
        receiver: receiverId,
      }
      const createdMessage = await Message.create(messageToCreate)
      res.status(201).json(createdMessage)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const oneMessage = await Message.findById(id).populate('author receiver')
    res.status(200).json(oneMessage)
  } catch (error) {
    next(error)
  }
})

module.exports = router
