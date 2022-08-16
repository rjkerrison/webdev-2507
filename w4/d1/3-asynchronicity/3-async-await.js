const { appendDwarvesAndLog } = require('./0-helpers')

// ASYNC function
async function findPrincessAsync() {
  if (Math.random() > 0.9) {
    throw new Error('could not find princess')
  }

  return 'Snow White'
}

const result = findPrincessAsync()
console.log(result)

result.then(appendDwarvesAndLog)

async function findPrincessAndSayHello() {
  try {
    // we can AWAIT the promise
    // we get the resolution value
    const princess = await findPrincessAsync()
    // this next line will happen only after the promise is resolved
    console.log(`Hello, ${princess}!`)
  } catch (error) {
    console.error('There was an error', error)
  }
}

findPrincessAndSayHello()
