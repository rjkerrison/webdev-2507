// This will work, because the declaration of welcomeMessageDeclaration is HOISTED,
// so the function welcomeMessageDeclaration is available everywhere in this file
const greeting = welcomeMessageDeclaration('So nice to have you here! Welcome!')
console.log(greeting) // So nice to have you here! Welcome!

// function declaration (statement)
function welcomeMessageDeclaration(message) {
  return message
}

// this will error because welcomeMessageExpression is NOT HOISTED, so it is not yet available
const greeting2 = welcomeMessageExpression('So nice to have you here! Welcome!')
console.log(greeting2)

// function expression - is a function without name stored in a variable
const welcomeMessageExpression = function (message) {
  console.log(message)
}
