const router = require('express').Router()
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

router.get('/', async (req, res, next) => {
  try {
    const characters = await Character.find()
    res.json(characters)
  } catch (error) {
    next(error)
  }
})

router.get('/name/:name', async (req, res, next) => {
  const { name } = req.params
  const nameRegex = new RegExp(name)
  try {
    const oneCharacter = await Character.findOne({
      name: { $regex: nameRegex, $options: 'i' },
    })
    // const oneCharacter = await Character.findOne({_id: id})
    res.json(oneCharacter)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const oneCharacter = await Character.findById(id)
    // const oneCharacter = await Character.findOne({_id: id})
    res.json(oneCharacter)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  console.log(req.body)
  try {
    const { name, occupation, cartoon, weapon } = req.body

    if (!name || !occupation || !weapon || typeof cartoon !== 'boolean') {
      return res.json({
        message: 'You should provide all of the required infos',
      })
    }
    const createdCharacter = await Character.create({
      name,
      occupation,
      cartoon,
      weapon,
    })
    res.json(createdCharacter)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const characterToUpdate = req.body
    const { id } = req.params
    const createdCharacter = await Character.findByIdAndUpdate(
      id,
      characterToUpdate,
      { new: true }
    )
    res.json(createdCharacter)
  } catch (error) {
    return res.json({ message: 'Character not found' })
  }
})

router.delete('/:id', async (req, res, next) => {
  // const { id } = req.params
  try {
    await Character.findByIdAndDelete(req.params.id)
    return res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
