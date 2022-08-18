const mongoose = require('mongoose')
const Person = require('./models/Person.model')
const RubberDuck = require('./models/RubberDuck.model')

/**
 * Rubberduck :
 * - name
 * - color
 * - material
 * - size
 * - price
 */

const computerScienceStudent = {
  name: 'Bob',
  age: 27,
}

const oneRubberDuck = {
  name: 'Awe',
  color: 'Yellow',
  material: 'wood',
  size: 'M',
  price: 999,
  anOtherKey: 'does it exist?',
}

const arrayOfDucks = [
  {
    name: 'Awe',
    color: 'Yellow',
    material: 'wood',
    size: 'M',
    price: 300,
  },
  {
    name: 'Awe2',
    color: 'Blue',
    material: 'iron',
    size: 'L',
    price: 500,
  },
  {
    name: 'Awe3',
    color: 'Red',
    material: 'gold',
    size: 'S',
    price: 200,
  },
]

mongoose
  .connect('mongodb://localhost/ducky-2507')
  .then(async (db) => {
    console.log(`Connected to ${db.connection.name}`)
    await RubberDuck.deleteMany()
    await Person.deleteMany()
    const student = await Person.create(computerScienceStudent)
    const myDuck = await RubberDuck.create({
      ...oneRubberDuck,
      owner: student._id,
    })
    console.log('myDuck', myDuck)

    const theOtherDucks = await RubberDuck.create(arrayOfDucks)
    // console.log('theOtherDucks', theOtherDucks)

    const iWantToDeleteYou = await RubberDuck.findOne({ name: 'Awe3' })
    // console.log(iWantToDeleteYou)
    // console.log('woodenDucks', woodenDucks)

    const woodenDucks = await RubberDuck.find({ material: 'wood' })

    /**
     * findByIdAndUpdate
     * findOneAndUpdate
     * findAndUpdate
     */
    const updatedDuck = await RubberDuck.findOneAndUpdate(
      {
        price: { $gt: 900 },
      },
      { material: 'gold' },
      { new: true }
    )
    console.log('updatedDuck', updatedDuck)

    const whatIsReturned = await RubberDuck.findByIdAndDelete(
      iWantToDeleteYou._id
    )
    // console.log('whatIsReturned', whatIsReturned)
  })
  .catch((error) => console.error(error.message))
