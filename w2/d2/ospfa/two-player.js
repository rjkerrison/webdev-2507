// This is a class
class OpenSourcePocketFightingAnimal {
  // Classes always have constructors
  constructor(name, moves, maxHitPoints) {
    this.name = name
    this.moves = moves
    this.hitPoints = maxHitPoints
    this.maxHitPoints = maxHitPoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.hitPoints <= 0
  }
  toString() {
    return `${this.name} (${this.hitPoints}/${this.maxHitPoints})`
  }
  takeDamage(hit) {
    this.hitPoints -= hit
  }
  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    opponent.takeDamage(move.hit)
    console.log(opponent.toString())
  }
}

// We can extend OpenSourcePocketFightingAnimal with a specific species
class Thundermouse extends OpenSourcePocketFightingAnimal {
  constructor(moves, maxHitPoints) {
    super('Thundermouse', moves, maxHitPoints)
  }
}

const myOspfa = new Thundermouse(
  [
    { name: 'Electrocute', hit: 25 },
    { name: 'Fist assault', hit: 15 },
    { name: 'Blunt instrument', hit: 23 },
  ],
  50
)
// or we can use the main class
const theirOspfa = new OpenSourcePocketFightingAnimal(
  'Firelizard',
  [
    { name: 'Stab', hit: 20 },
    { name: 'Immolate', hit: 35 },
    { name: 'Slap', hit: 5 },
  ],
  60
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(' Player One Ospfa '.padStart(30, '=').padEnd(40, '='))
console.log(myOspfa)
console.log(' Player Two Ospfa '.padStart(30, '=').padEnd(40, '='))
console.log(theirOspfa)

function promptUserForMove(player, opponent) {
  rl.question(
    `Which move would you like ${player.toString()} to use against ${opponent.toString()}?
  Options are:
    ${player.moves.map(({ name }, i) => `${i}. ${name}`).join('\n  ')}
  Indicate 0-${player.moves.length - 1}.
  > `,
    function (index) {
      // The user has chosen a move — we'll now perform that move.
      player.useMoveAgainstOpponent(index, opponent)

      if (opponent.isFainted()) {
        // If the opponent has fainted, we win
        console.log(
          `${player.toString()} sufficiently injured ${opponent.toString()}!`
        )
      } else {
        // If the opponent hasn't fainted, they can now move
        promptUserForMove(opponent, player)
      }
    }
  )
}

promptUserForMove(myOspfa, theirOspfa)
