// Inheritance from a Mammal class

class Mammal {
  constructor(gestationTime, habitat) {
    this.hasNipples = true
    this.gestationTime = gestationTime
    this.habitat = habitat
  }

  warCry() {
    return `I am a mammal, hear me out!`
  }
}

class Cat extends Mammal {
  constructor(gestationTime, habitat, color, race, furType) {
    super(gestationTime, habitat)

    this.color = color
    this.race = race
    this.furType = furType
  }
  warCry() {
    return `Miaaaaaou`
  }
}

class Kitten extends Cat {
  constructor(gestationTime, habitat, color, race, furType, cuteness = 10) {
    super(gestationTime, habitat, color, race, furType)
    this.cuteness = cuteness
  }
  warCry() {
    return `${super.warCry()} Meow Meow am I a cute kitten ? My score is ${
      this.cuteness
    } !`
  }
  setColor(color) {
    this.color = color
  }
}

const myNewKitten = new Kitten(
  '9 weeks',
  'On a pillow',
  'grey and white',
  'Persian and Maine Coon',
  'long',
  9.9
)

myNewKitten.setColor('blue')

console.log(myNewKitten.color)
console.log(myNewKitten.warCry())
