const princesses = [
  'Jasmine',
  'Tiana',
  'Cinderella',
  'Ariel',
  'Rapunzel',
  'Snow White',
]

function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

async function findPrincessAsync(index) {
  await sleep(index)
  return princesses[index]
}

// Promise NESTING
findPrincessAsync(0).then((princess) => {
  console.log('Princess found:', princess)
  findPrincessAsync(1).then((princess1) => {
    console.log('Princess found:', princess1)
    findPrincessAsync(2).then((princess2) => {
      console.log('Princess found:', princess2)
    })
  })
})

// Promise CHAINING
findPrincessAsync(0)
  .then((princess) => {
    console.log('Princess found:', princess)
    return findPrincessAsync(1)
  })
  .then((princess1) => {
    console.log('Princess found:', princess1)
    return findPrincessAsync(2)
  })
  .then((princess2) => {
    console.log('Princess found:', princess2)
  })
