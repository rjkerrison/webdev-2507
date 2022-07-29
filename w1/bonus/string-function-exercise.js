const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const words = [
  'array',
  'words',
  'class',
  'pairs',
  'coder',
  'teach',
  'learn',
  'sleep',
  'photo',
]

const randomWord = words[Math.floor(Math.random() * words.length)]

rl.question('Guess a word: ', (value) => {
  console.log(`You guessed ${value}`)

  /*
  Tell the user how close they were to the randomWord
  
  - if they got a letter right in the right position, tell them
  - if they got a letter right but in the wrong position, tell them that
  - if they got everything right, tell them they won and exit
  */

  /* BONUS: if they didn't make a valid guess (5 letters long) tell them and let them try again */
  /* BONUS BONUS: only allow guesses which are in the word list */

  rl.close()
  console.log(`The word was '${randomWord}'`)
})

// How would you allow them to guess multiple times?
