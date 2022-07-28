const greeting = 'Hello'

// We can call a function before it's declared because
// of HOISTING — JavaScript reads function declaration names
// before processing the rest of the file,
// so we can call them early
greetName('Begonia')

// *but we cannot call it here
// askHowTheyAre('Begonia')

// because this is a function DECLARATION
// (i.e. we gave it a name after the function keyword)
// we can call it anywhere in this file
function greetName(personName) {
  console.log(`${greeting}, ${personName}!`)
}

// function expressions and arrow expressions
// are NOT hoisted (because consts and lets and vars are not hoisted)
const askHowTheyAre = (personName) => {
  console.log(`How are you, ${personName}?`)
}

// we CAN call askHowTheyAre here*
askHowTheyAre('Begonia')
