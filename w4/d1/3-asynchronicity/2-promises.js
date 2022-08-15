const { getRandomDelay, appendDwarvesAndLog } = require('./0-helpers')

// CUSTOMISABLE AFTER THE FACT
function findFavouritePrincessWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30% chance of failure
      if (Math.random() > 0.1) {
        reject('FAILED TO FIND A PRINCESS')
        return
      }

      // resolve – like a callback, but
      // we can define it after calling this function
      // by using .then()
      resolve('Snow White')
    }, getRandomDelay())
  })
}

const findPrincessPromise = findFavouritePrincessWithPromise()

console.log(findPrincessPromise)

// PROMISES allow us to define the 'callback' after calling the initial function
findPrincessPromise.then(console.log).catch(handleError)
// and we can specify multiple callbacks separately – they will all be run
findPrincessPromise.then(appendDwarvesAndLog).catch(handleError)

function handleError(error) {
  console.error(
    'Sorry Hamza, it failed to find a princess. Error message:',
    error
  )
}
