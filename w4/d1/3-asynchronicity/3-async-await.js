const { appendDwarvesAndLog } = require('./0-helpers')

// ASYNC function
async function findPrincessAsync() {
  return 'Snow White'
}

const result = findPrincessAsync()
console.log(result)

result.then(appendDwarvesAndLog)

async function findPrincessAndSayHello() {
  // we can AWAIT the promise
  // we get the resolution value
  const princess = await findPrincessAsync()
  // this next line will happen only after the promise is resolved
  console.log(`Hello, ${princess}!`)
}

findPrincessAndSayHello()
