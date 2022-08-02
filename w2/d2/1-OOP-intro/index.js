// Let's create a car in our object factory

function Car(brand, color) {
  this.brand = brand
  this.color = color
  this.wheels = 4

  this.displayInfos = () => {
    console.log(
      `My ${this.brand} is ${this.color} and has ${this.wheels} wheels`
    )
  }
}

const mercedes = new Car('Mercedes', 'red')
const jaguar = new Car('Jaguar', 'black')

// // console.log(mercedes)
// mercedes.displayInfos()
// console.log(mercedes)
// jaguar.displayInfos()
// console.log(jaguar)

class CarWithClass {
  constructor(brand, color, model, topSpeed) {
    this.brand = brand
    this.color = color
    this.model = model
    this.topSpeedInKmph = topSpeed
    this.wheels = 4
    this.options = []
  }

  displayInfos() {
    return `My ${this.brand} car (${this.model}) has a topSpeed of ${this.topSpeedInKmph} and ${this.wheels} wheels`
  }

  displayOptions() {
    if (!this.options.length) {
      return `There is no options!`
    }
    console.log(`Options included with this ${this.model}:`)
    for (const option of this.options) {
      console.log(`- ${option}`)
    }
  }

  addOption(option) {
    this.options.push(option)
  }
  move(to) {
    console.log(`We are moving to ${to}`)
  }
}

const rollsRoyce = new CarWithClass('Rolls Royce', 'grey', 'Phantom', 250)

rollsRoyce.addOption('AC')
rollsRoyce.addOption('GPS')
rollsRoyce.addOption('Heated Seats')
rollsRoyce.addOption('V12 Engine')

rollsRoyce.displayOptions()

class Person {
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
  }

  drive() {
    console.log(`I don't have a car!`)
  }
  walk() {
    console.log(`${this.name} actually love walking!`)
  }
}

class Driver extends Person {
  constructor(name, age, address, car, skilledDriver) {
    super(name, age, address)
    this.car = car
    this.skilledDriver = skilledDriver
  }
  drive(to) {
    console.log(`${this.name} is getting in the car`)
    this.car.move(to)
  }
}

const paulAddress = {
  city: 'Paris',
  street: 'Champs-Elysees',
}

const paul = new Driver('Paul', 27, paulAddress, rollsRoyce, true)

paul.drive('Paris')
