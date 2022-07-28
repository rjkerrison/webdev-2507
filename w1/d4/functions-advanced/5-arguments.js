function makePizzaWithIngredients() {
  console.log(`Your pizza has the ingredients:`)

  // arguments is iterable
  for (const ingredient of arguments) {
    console.log(`- ${ingredient}`)
  }
}

makePizzaWithIngredients('mozzarella')
makePizzaWithIngredients('san marzano tomatoes', 'mozzarella', 'basilico')
makePizzaWithIngredients('ham')
makePizzaWithIngredients('ham', 'ricotta', 'chili flakes')

// WHAT IF we already have a parameter?
function makeRecipeWithIngredients(recipeName) {
  console.log(`Your ${recipeName} has the ingredients:`)
  const otherArguments = Array.from(arguments).slice(1)

  // arguments is iterable
  for (const ingredient of otherArguments) {
    console.log(`- ${ingredient}`)
  }
}

makeRecipeWithIngredients(
  'pie',
  'chicken',
  'apple',
  'rhubarb',
  'shepherds',
  'cottage'
)

// REST PARAMETERS SYNTAX (...)
// WHAT IF we already have a parameter?
// We can gather all extra parameters into an array with ...restOfParameters syntax
function makeThingWithStuff(thing, stuff, ...otherArguments) {
  console.log(`Your ${thing} has the ${stuff}:`)

  // arguments is iterable
  for (const argument of otherArguments) {
    console.log(`- ${argument}`)
  }
}

makeThingWithStuff(
  'rocketship',
  'parts',
  'one car bonnet',
  'two tables',
  'an old fridge'
)
