function makeTea(options, diner) {
  console.log(
    `I have made a ${options.color} tea ${
      options.withMilk ? 'with' : 'without'
    } milk for ${diner}`
  )
}

function makeToast(options = { slices: 1 }, diner = 'Florian') {
  console.log(`I have made ${options.slices} slices of toast for ${diner}`)
}

// Creating a callback with function expression syntax
const makeBlackTeaWithMilk = function (diner) {
  makeTea(
    {
      color: 'black',
      withMilk: true,
    },
    diner
  )
}

// Creating a function which WILL do something when we call it
// "callback"
const makeTwoSlicesOfToast = (diner) => makeToast({ slices: 2 }, diner)

function breakfastMaker(makeFood, makeDrink, diner) {
  makeFood(diner)
  makeDrink(diner)
}

breakfastMaker(makeTwoSlicesOfToast, makeBlackTeaWithMilk, 'Robin')
breakfastMaker(
  (diner) => makeToast({ slices: 5 }, diner),
  makeBlackTeaWithMilk,
  'Morgane'
)
breakfastMaker(makeToast, makeBlackTeaWithMilk, 'Julien')

const result = 456 + 78
result
