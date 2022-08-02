// In JS, "this" is the object executing function

const user = {
  firstName: 'Alice',
  lastName: 'Doe',
  pets: ['cat', 'dog', 'fish'],
  adress: {
    street: 'rue des rigoles',
    city: this,
    displayAdress: () => {
      console.log(this)
    },
  },
  listPets() {
    console.log(this.pets)
    this.pets.forEach((pet) => {
      console.log(`${this.firstName} has a ${pet}`)
    })
  },
  // listPets: function () {
  //   console.log(this)
  // },
  // listPets: () => {
  //   console.log()
  // }
}

// console.log(this)

console.log(user.adress.city)
