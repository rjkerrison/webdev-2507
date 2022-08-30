const mongoose = require(`mongoose`);
const Pet = require(`./models/pet.model`);
const Human = require(`./models/human.model`);

const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.json());

app.get(`/`, (req, res) => {
  res.json({ message: `Hello from the homepage!` })
})

app.get(`/humans`, async (req, res) => {
  try {
    const allHumans = await Human.find();
    res.json(allHumans);
  } catch (error) {
    console.error(error.message);
  }
})

app.post(`/humans`, async (req, res) => {
  try {
    const { name, age } = req.body;
    const newHuman = { name, age };

    const createdHuman = await Human.create(newHuman);
    res.json(createdHuman);

  } catch (error) {
    console.error(error.message);
  }
})

app.get(`/pets`, async (req, res) => {
  try {
    const allPets = await Pet.find();
    res.json(allPets);
  } catch (error) {
    console.error(error.message);
  }
})

app.post(`/pets`, async (req, res) => {
  try {
    const { name, race, owner } = req.body;
    const newPet = { name, race, owner };

    const humanExists = await Human.findById(owner);

    if (!humanExists) {
      res.status(404).json({message: `Human ${owner} does not exist!`});
      return;
    }

    const createdPet = await (await Pet.create(newPet)).populate(`owner`);
    res.json(createdPet);

  } catch (error) {
    console.error(error.message);
  }
})


mongoose
  .connect(`mongodb://127.0.0.1/api-example`)
  .then(() => {
    console.log(`connected to database...`);
  })
  .catch((error) => {
    console.error(error.message);
  })

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})