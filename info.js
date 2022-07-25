const runner = require('child_process')
const fs = require('fs')
const info = require('./info.json')

const enhanceStudent = (student) => {
  if (student.github && typeof student.github === 'string') {
    student.github = {
      username: student.github,
      link: `https://github.com/${student.github}/`,
    }
  }
}
info.forEach(enhanceStudent)

const saveFile = () => {
  const dump = JSON.stringify(info, null, 2)
  fs.writeFile('./info.json', dump, function (err) {
    if (err) {
      return console.log(err)
    }
  })
}

const chooseRandomStudent = (filter) => {
  let choices = info
  if (filter) {
    choices = info.filter(filter)
  }
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

const searchStudents = (searchTerm) => {
  const student = info.find((s) => {
    return s.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return student
}

const githubUrl = (githubRef) => `https://github.com/${githubRef}/`

const format = (student, formatArg) => {
  // e.g. name,project1.github
  if (!formatArg) {
    return student
  }

  if (formatArg === 'table') {
    return [
      student.name,
      '',
      'My Game',
      githubUrl((student.projects && student.projects[0]?.github) || '???'),
      '',
      student.projects && student.projects[0]?.deployment,
    ].join('\t')
  }

  const properties = formatArg.split(',')
  const result = properties.reduce((dict, property) => {
    // e.g. project1.github
    let indices = property.split('.')
    let fromValue = student
    let intoValue = null
    let nextIntoValue = dict
    let index
    for (index of indices) {
      intoValue = nextIntoValue
      if (!intoValue.hasOwnProperty(index)) {
        intoValue[index] = {}
      }
      // drop down a level
      nextIntoValue = intoValue[index]
      fromValue = fromValue[index]
    }
    // At the final step, add
    intoValue[index] = fromValue

    return dict
  }, {})
  return result
}

const help = (mode) => {
  console.log(`Unknown mode: ${mode}`)
}

const viewStudentProject = (student) => {
  const url = githubUrl(student.projects[0].github)
  runner.exec(`open ${url}`)
}

const suspenseMessages = [
  `Thinking…`,
  `🤔`,
  `Who's it going to be?`,
  `Get excited!`,
  `We're getting ready to choose…`,
  `Consulting with known associates…`,
  `Squaring a circle`,
  `Planning a vacation 🏖`,
  `Adding suspense…`,
  'Opening a wormhole to a parallel universe',
  'Solving the grandfather paradox',
  'Thinking really, really hard',
  'Notifying the Queen',
  `Looking for Navigo, why is it not in my wallet?`,
  `Waiting for a train`,
  `Phoning mum…`,
  `Forgot I was choosing a student!\nSorry!`,
  'Having a nap after lunch',
  'Evolving Pokémon…',
  `Checking local weather…\n🌦 🌦 🌦`,
  `Contacting the FBI`,
  `🥁 🥁 🥁 🥁 🥁`,
  `Almost there…`,
]

const addSuspense = async () => {
  let suspenseRemaining = 100

  while (suspenseRemaining > 0) {
    const reduction = Math.floor(20 * Math.random())
    suspenseRemaining -= reduction
    const message =
      suspenseMessages[Math.floor(Math.random() * suspenseMessages.length)]
    console.log(message)
    await sleep(250 * (2 + Math.floor(3 * Math.random())))
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const fisherYatesShuffle = (...array) => {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex > 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const splitIntoGroups = function* (array, groupSize) {
  let index = 0

  while (index < array.length) {
    yield array.slice(index, index + groupSize)
    index += groupSize
  }
}

const getRandomGroups = (size) => {
  Array.from(splitIntoGroups(fisherYatesShuffle(...info), size)).forEach(
    (group, i) => {
      const names = group.map((s) => s.name)
      console.log(`Group ${i + 1}: ${names.join(', ')}`)
    }
  )
}

const congratulate = (student) => {
  console.log(`CONGRATULATIONS, ${student.name}! It's you!`)
}

const evalProperty = (student, property) => {
  try {
    return eval(`const temp = ${JSON.stringify(student)}
    temp${property}`)
  } catch {
    return `Error finding property ${property}`
  }
}

const execute = async () => {
  const args = process.argv.slice(2)
  const flags = args.filter((x) => x.startsWith('--'))
  const mode = args.shift()
  let student, formatArg

  switch (mode) {
    case 'pairs':
      if (!flags.includes('--fast')) {
        await addSuspense()
      }
      getRandomGroups(2)
      break
    case 'groups':
      const groupSize = parseInt(args.shift())
      getRandomGroups(groupSize)
      break
    case 'eval':
      student = chooseRandomStudent()
      const property = args.shift()
      const result = evalProperty(student, property)
      console.log(student, result)
      break
    case 'suspense':
      await addSuspense()
      student = chooseRandomStudent((s) => !s.hasPresented)
      congratulate(student)
      break
    case 'random':
      student = chooseRandomStudent()
      formatArg = args.shift()
      console.log(format(student, formatArg))
      break
    case 'search':
      student = searchStudents(args.shift())
      console.log(format(student, args.shift()))
      break
    case 'search-and-view':
      student = searchStudents(args.shift())
      viewStudentProject(student)
      break
    case 'list':
      const students = info
      formatArg = args.shift()
      students.forEach((student) => console.log(format(student, formatArg)))
      break
    case 'view':
      student = chooseRandomStudent()
      viewStudentProject(student)
      break
    default:
      help(mode)
      break
  }
}

execute().then(saveFile)
